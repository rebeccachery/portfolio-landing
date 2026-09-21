import { scrollToId } from "../lib/scroll";

type Project = {
  num: string;
  title: string;
  problem: string;
  built: string;
  learned: string;
  tech: string[];
  href?: string;
  anchor?: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Polyflow",
    problem: "Speech AI largely skips under-resourced languages like Haitian Creole.",
    built: "An AI speech platform with dataset pipelines, production SaaS, and Echo for pronunciation practice.",
    learned: "Product demand shows up when you talk to learners and educators — then ship something they can try.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "ASR"],
    anchor: "startup",
  },
  {
    num: "02",
    title: "Founder OS",
    problem: "Running a solo speech-AI startup means fundraising research, application tracking, and OSS discovery are all manual and scattered across tabs.",
    built: "An internal OS of AI agents that scouts funding opportunities, ranks open-source resources, and tracks applications through a unified founder dashboard.",
    learned: "The same agent-orchestration patterns behind Polyflow's speech pipelines generalize cleanly to founder-ops automation.",
    tech: ["Python", "FastAPI", "SQLite", "Next.js", "GitHub Actions"],
    href: "https://github.com/rebeccachery/founder-os",
  },
  {
    num: "03",
    title: "Haitian Educational Equity Map",
    problem: "Haitian communities' educational needs are invisible in most planning tools — no easy way to see where language barriers, low internet access, and school support gaps overlap.",
    built: "A geospatial platform overlaying Haitian population density, a composite educational-need score, and school/library locations across NYC and Miami metros.",
    learned: "The same on-the-ground research into Haitian Creole speakers that shaped Polyflow surfaces directly in where the educational need is greatest.",
    tech: ["Next.js", "TypeScript", "Plotly", "Census ACS API", "GeoJSON"],
    href: "https://github.com/rebeccachery/nyc_map",
  },
  {
    num: "04",
    title: "Semantic Audio Map",
    problem: "Voice memos are hard to organize into actionable structure.",
    built: "A voice-to-graph pipeline that transcribes audio and extracts editable mind-map nodes.",
    learned: "Structured LLM outputs plus an interactive canvas make human-in-the-loop refinement practical.",
    tech: ["React Flow", "Next.js", "TypeScript", "Whisper", "GPT-4o-mini"],
    href: "https://github.com/rebeccachery/semantic_mind_map_tool",
  },
  {
    num: "05",
    title: "Audio Memory Map",
    problem: "Personal audio memories lose place and context over time.",
    built: "A spatial audio app for recording, transcribing, and geotagging voice memories on a map.",
    learned: "Unified local/cloud storage and clean APIs matter as much as the map UI.",
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "AWS S3"],
    href: "https://github.com/rebeccachery/audio-memory-map",
  },
  {
    num: "06",
    title: "Play-by-Ear Music Instrument Tutor",
    problem: "Learners need immediate feedback on pitch and rhythm without a teacher present.",
    built: "An audio analysis pipeline for pitch tracking, melody alignment, and note-level scoring.",
    learned: "Signal processing choices (pYIN, alignment) dominate perceived feedback quality.",
    tech: ["Python", "Librosa", "NumPy", "SciPy", "Streamlit"],
    href: "https://github.com/rebeccachery/play-by-ear-music-tutor",
  },
  {
    num: "07",
    title: "ISTWA",
    problem: "Historical narratives rarely feel interactive or culturally grounded online.",
    built: "An animated historical narrative experience framing the Haitian Revolution through story and design.",
    learned: "Story, craft tooling, and web delivery have to move together for the piece to land.",
    tech: ["Blender", "C", "Python", "WebGL", "After Effects"],
    href: "https://istwa-site.vercel.app",
  },
  {
    num: "08",
    title: "SandwichBot",
    problem: "Multi-step physical tasks are brittle when planning and control stay disconnected.",
    built: "An autonomous robot using LLM-based task planning and vision under real manipulation constraints.",
    learned: "Hardware forces you to respect failure modes that demos hide.",
    tech: ["Python", "PyTorch", "Computer Vision", "LeRobot", "LLMs"],
    href: "https://devpost.com/software/sandwichbot",
  },
];

export function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-header">
        <p className="section-index">02 / Selected work</p>
        <h2 className="section-title">Things I've built.</h2>
        <p className="section-lead">
          A curated archive — not every experiment, just the work that best shows how I think and ship.
        </p>
      </div>

      <div className="work-list">
        {projects.map((project) => {
          const shared = (
            <>
              <span className="work-num">{project.num}</span>
              <div className="work-body">
                <h3 className="work-title">{project.title}</h3>
                <div className="work-meta">
                  <p>
                    <strong>Problem</strong>
                    {project.problem}
                  </p>
                  <p>
                    <strong>Built</strong>
                    {project.built}
                  </p>
                  <p>
                    <strong>Learned</strong>
                    {project.learned}
                  </p>
                </div>
                <div className="work-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="work-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="work-link">View →</span>
            </>
          );

          if (project.anchor) {
            return (
              <a
                key={project.title}
                className="work-item"
                href={`#${project.anchor}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(project.anchor!);
                }}
              >
                {shared}
              </a>
            );
          }

          return (
            <a
              key={project.title}
              className="work-item"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              {shared}
            </a>
          );
        })}
      </div>
    </section>
  );
}
