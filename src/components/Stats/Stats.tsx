import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, GraduationCap, Award, Library, Briefcase, Microscope } from 'lucide-react';
import { stats } from '../../data/siteData';
import './Stats.css';

function CountUp({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!run) return;
    let v = 0;
    const step = Math.max(1, Math.ceil(target / 80));
    const t = setInterval(() => {
      v = Math.min(v + step, target);
      setCount(v);
      if (v >= target) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [run, target]);
  return <>{count.toLocaleString()}{suffix}</>;
}

const statIcons = [
  <Users size={32} />,
  <GraduationCap size={32} />,
  <Award size={32} />,
  <Library size={32} />,
  <Briefcase size={32} />,
  <Microscope size={32} />,
];

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <section className="stats section-blue" id="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div className="stats__item" key={i}>
              <div className="stats__icon">{statIcons[i]}</div>
              <div className="stats__value">
                <CountUp target={s.value} suffix={s.suffix} run={inView} />
              </div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
