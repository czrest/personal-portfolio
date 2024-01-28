export default function PaperPlaneLogo({ ...props }) {
  return (
    <>
      <svg viewBox="0 0 1000 1000" {...props}>
        <rect x="7.5" y="7.5" class="bg-black opacity-70" width="985" height="985" />
        <g>
          <polygon
            class="st1"
            points="376.9,479.5 593.3,263.2 884.8,115.2 736.8,406.7 520.5,623.1 369.9,630.1 	"
          />
          <g>
            <polygon
              class="st2"
              points="884.8,115.2 115.2,127.7 396.8,506.3 		"
            />
            <polygon
              class="st3"
              points="312.9,648.6 884.8,115.2 396.8,506.3 		"
            />
            <polygon
              class="st2"
              points="884.8,115.2 872.3,884.8 493.7,603.2 		"
            />
            <polygon
              class="st3"
              points="351.4,687.1 884.8,115.2 493.7,603.2 		"
            />
          </g>
        </g>
      </svg>
    </>
  );
}
