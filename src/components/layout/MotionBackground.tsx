type MotionBackgroundProps = {
  variant?: "hero" | "page";
};

export const MotionBackground = ({
  variant = "page",
}: MotionBackgroundProps) => {
  const isHero = variant === "hero";

  return (
    <>
      <style>{`
        @keyframes pfSparkMorphA {
          0% { transform: rotate(0deg) translate3d(0px, 0px, 0) scale(1); opacity: 0.78; }
          25% { transform: rotate(70deg) translate3d(-8px, 5px, 0) scale(1.03); opacity: 0.84; }
          50% { transform: rotate(160deg) translate3d(6px, -7px, 0) scale(0.98); opacity: 0.74; }
          75% { transform: rotate(255deg) translate3d(-5px, -4px, 0) scale(1.02); opacity: 0.83; }
          100% { transform: rotate(360deg) translate3d(0px, 0px, 0) scale(1); opacity: 0.78; }
        }
        @keyframes pfSparkMorphB {
          0% { transform: rotate(360deg) translate3d(0px, 0px, 0) scale(1.01); opacity: 0.8; }
          30% { transform: rotate(280deg) translate3d(7px, -6px, 0) scale(0.97); opacity: 0.74; }
          60% { transform: rotate(145deg) translate3d(-6px, 8px, 0) scale(1.04); opacity: 0.86; }
          100% { transform: rotate(0deg) translate3d(0px, 0px, 0) scale(1.01); opacity: 0.8; }
        }
        @keyframes pfSparkMorphC {
          0% { transform: rotate(-20deg) translate3d(0px, 0px, 0) scale(1); opacity: 0.76; }
          20% { transform: rotate(55deg) translate3d(5px, 7px, 0) scale(1.03); opacity: 0.83; }
          45% { transform: rotate(135deg) translate3d(-8px, 3px, 0) scale(0.98); opacity: 0.75; }
          70% { transform: rotate(230deg) translate3d(4px, -7px, 0) scale(1.04); opacity: 0.86; }
          100% { transform: rotate(340deg) translate3d(0px, 0px, 0) scale(1); opacity: 0.76; }
        }
        .pf-animate-spark-a {
          animation: pfSparkMorphA 32s cubic-bezier(0.42, 0, 0.18, 1) infinite;
        }
        .pf-animate-spark-b {
          animation: pfSparkMorphB 40s cubic-bezier(0.42, 0, 0.18, 1) infinite;
        }
        .pf-animate-spark-c {
          animation: pfSparkMorphC 46s cubic-bezier(0.42, 0, 0.18, 1) infinite;
        }
      `}</style>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-20 right-0 h-[760px] w-[760px] translate-x-1/4 -translate-y-1/4">
          <div
            className="pf-animate-spark-a absolute inset-0 rounded-full blur-[110px]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, rgba(249, 115, 22, 0.12) 22%, rgba(251, 146, 60, 0.16) 50%, rgba(249, 115, 22, 0.12) 78%, transparent 100%)",
              filter: "blur(56px)",
            }}
          />
        </div>

        <div className="absolute -bottom-1/3 -left-1/4 h-[980px] w-[980px]">
          <div
            className="pf-animate-spark-b absolute inset-0 rounded-full blur-[120px]"
            style={{
              background:
                "conic-gradient(from 50deg, transparent 0%, rgba(217, 119, 6, 0.11) 25%, rgba(249, 115, 22, 0.15) 50%, rgba(217, 119, 6, 0.11) 75%, transparent 100%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="absolute top-1/3 left-1/2 h-[520px] w-[520px] -translate-x-1/2">
          <div
            className="pf-animate-spark-c absolute inset-0 rounded-full blur-[90px]"
            style={{
              background:
                "conic-gradient(from -40deg, transparent 0%, rgba(249, 115, 22, 0.08) 30%, rgba(251, 146, 60, 0.1) 50%, rgba(249, 115, 22, 0.08) 70%, transparent 100%)",
              filter: "blur(42px)",
            }}
          />
        </div>

        {isHero && (
          <div className="absolute bottom-0 left-1/2 h-[1180px] w-[1180px] -translate-x-1/2 translate-y-1/3">
            <div
              className="pf-animate-spark-a absolute inset-0 rounded-full blur-[120px]"
              style={{
                background:
                  "conic-gradient(from 90deg, transparent 0%, rgba(249, 115, 22, 0.12) 25%, rgba(251, 146, 60, 0.15) 50%, rgba(249, 115, 22, 0.12) 75%, transparent 100%)",
                filter: "blur(60px)",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};
