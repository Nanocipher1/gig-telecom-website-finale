import { useState, useEffect, useRef } from 'react';

const TEST_FILE_URL = 'https://speed.cloudflare.com/__down?bytes=10000000';
const UPLOAD_URL = 'https://speed.cloudflare.com/__up';

function formatSpeed(mbps) {
  if (mbps === null) return null;
  if (mbps >= 1000) return { value: (mbps / 1000).toFixed(2), unit: 'Gbps' };
  return { value: mbps.toFixed(1), unit: 'Mbps' };
}

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const MAX_SPEED = 100;

function GaugeRing({ progress, color, isActive }) {
  const offset = CIRCUMFERENCE - (Math.min(progress, 100) / 100) * CIRCUMFERENCE;
  return (
    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 220 220">
      <circle cx="110" cy="110" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
      <circle
        cx="110" cy="110" r={RADIUS} fill="none"
        stroke={color} strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={offset}
        style={{ transition: isActive ? 'stroke-dashoffset 0.4s ease' : 'none' }}
      />
    </svg>
  );
}

function PulsingDot({ color }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: color }} />
    </span>
  );
}

export default function SpeedTest() {
  const [phase, setPhase] = useState('idle');
  const [ping, setPing] = useState(null);
  const [download, setDownload] = useState(null);
  const [upload, setUpload] = useState(null);
  const [liveSpeed, setLiveSpeed] = useState(0);
  const [progress, setProgress] = useState(0);
  const abortRef = useRef(null);

  async function measurePing() {
    const times = [];
    for (let i = 0; i < 5; i++) {
      const t0 = performance.now();
      await fetch('https://speed.cloudflare.com/__ping', { cache: 'no-store' });
      times.push(performance.now() - t0);
    }
    return Math.round(Math.min(...times));
  }

  async function measureDownload() {
    const controller = new AbortController();
    abortRef.current = controller;
    const t0 = performance.now();
    const res = await fetch(TEST_FILE_URL + '&t=' + Date.now(), {
      signal: controller.signal, cache: 'no-store',
    });
    let loaded = 0;
    const contentLength = 10_000_000;
    const reader = res.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      loaded += value.length;
      const elapsed = (performance.now() - t0) / 1000;
      const currentMbps = (loaded * 8) / elapsed / 1_000_000;
      setLiveSpeed(currentMbps);
      setProgress(Math.min(99, Math.round((loaded / contentLength) * 100)));
    }
    const elapsed = (performance.now() - t0) / 1000;
    return (loaded * 8) / elapsed / 1_000_000;
  }

  async function measureUpload() {
    const size = 2_000_000;
    const data = new Uint8Array(size);
    const t0 = performance.now();
    await fetch(UPLOAD_URL, { method: 'POST', body: data, cache: 'no-store' });
    const elapsed = (performance.now() - t0) / 1000;
    return (size * 8) / elapsed / 1_000_000;
  }

  async function runTest() {
    setPing(null); setDownload(null); setUpload(null);
    setLiveSpeed(0); setProgress(0);
    try {
      setPhase('ping');
      const p = await measurePing();
      setPing(p);
      setPhase('download');
      setLiveSpeed(0); setProgress(0);
      const dl = await measureDownload();
      setDownload(dl); setProgress(100);
      setPhase('upload');
      setLiveSpeed(0);
      const ul = await measureUpload();
      setUpload(ul);
      setPhase('done');
    } catch (e) {
      if (e.name !== 'AbortError') setPhase('error');
    }
  }

  const isRunning = ['ping', 'download', 'upload'].includes(phase);
  const gaugeProgress = phase === 'download' || phase === 'upload'
    ? Math.min((liveSpeed / MAX_SPEED) * 100, 100)
    : phase === 'done' ? 100 : 0;

  const gaugeColor = phase === 'upload' ? '#60a5fa' : '#f97316';

  const phaseLabel = {
    idle: 'Ready',
    ping: 'Measuring Latency…',
    download: 'Testing Download…',
    upload: 'Testing Upload…',
    done: 'Test Complete',
    error: 'Test Failed',
  }[phase];

  const dlFormatted = formatSpeed(download);
  const ulFormatted = formatSpeed(upload);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-8 shadow-2xl border border-white/10 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-56 h-56">
              <GaugeRing progress={gaugeProgress} color={gaugeColor} isActive={isRunning} />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {phase === 'idle' && (
                  <>
                    <svg className="w-10 h-10 text-slate-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <span className="text-slate-400 text-sm font-semibold">Press Start</span>
                  </>
                )}
                {phase === 'ping' && (
                  <>
                    <span className="text-white text-4xl font-black">…</span>
                    <span className="text-slate-400 text-xs mt-1 animate-pulse">Ping</span>
                  </>
                )}
                {(phase === 'download' || phase === 'upload') && (
                  <>
                    <span className="text-white text-4xl font-black leading-none">
                      {liveSpeed < 1 ? '…' : liveSpeed.toFixed(1)}
                    </span>
                    <span className="text-slate-400 text-xs mt-1 font-semibold">Mbps</span>
                    <span className="text-xs mt-2 font-semibold" style={{ color: gaugeColor }}>
                      {progress}%
                    </span>
                  </>
                )}
                {phase === 'done' && dlFormatted && (
                  <>
                    <span className="text-orange-400 text-4xl font-black leading-none">{dlFormatted.value}</span>
                    <span className="text-slate-400 text-xs mt-1 font-semibold">{dlFormatted.unit} ↓</span>
                  </>
                )}
                {phase === 'error' && (
                  <span className="text-red-400 text-sm font-bold text-center px-4">Failed</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 -mt-2">
            {isRunning && <PulsingDot color={gaugeColor} />}
            <span className="text-slate-400 text-sm font-medium">{phaseLabel}</span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              {
                label: 'Ping',
                value: ping !== null ? ping : null,
                unit: 'ms',
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                ),
                color: 'text-yellow-400',
                active: phase === 'ping',
              },
              {
                label: 'Download',
                value: dlFormatted ? dlFormatted.value : null,
                unit: dlFormatted ? dlFormatted.unit : 'Mbps',
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                ),
                color: 'text-orange-400',
                active: phase === 'download',
              },
              {
                label: 'Upload',
                value: ulFormatted ? ulFormatted.value : null,
                unit: ulFormatted ? ulFormatted.unit : 'Mbps',
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 7.5m0 0L7.5 12m4.5-4.5V21" />
                  </svg>
                ),
                color: 'text-blue-400',
                active: phase === 'upload',
              },
            ].map(({ label, value, unit, icon, color, active }) => (
              <div
                key={label}
                className={`rounded-2xl p-4 text-center border transition-all duration-300 ${
                  active
                    ? 'bg-white/10 border-white/20'
                    : 'bg-white/5 border-white/5'
                }`}
              >
                <div className={`flex justify-center mb-2 ${active ? color : 'text-slate-500'}`}>{icon}</div>
                <div className={`text-lg font-black ${value !== null ? color : 'text-slate-600'}`}>
                  {value !== null ? value : '—'}
                </div>
                <div className="text-slate-500 text-xs font-semibold mt-0.5">{unit}</div>
                <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={runTest}
            disabled={isRunning}
            className={`w-full font-black py-4 rounded-2xl text-base transition-all duration-200 ${
              isRunning
                ? 'bg-white/10 text-slate-500 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-400 text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/25'
            }`}
          >
            {isRunning ? 'Running Test…' : phase === 'done' ? '↺ Run Again' : '▶ Start Speed Test'}
          </button>

          <p className="mt-4 text-xs text-slate-600 text-center">
            Powered by Cloudflare • Results reflect current network conditions
          </p>
        </div>
      </div>
    </div>
  );
}
