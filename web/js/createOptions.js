import { fetchNui } from "./fetchNui.js";

const optionsWrapper = document.getElementById("options-wrapper");

function onClick() {
  // when nuifocus is disabled after a click, the hover event is never released
  this.style.pointerEvents = "none";

  fetchNui("select", [this.targetType, this.targetId, this.zoneId]);
  // is there a better way to handle this? probably
  setTimeout(() => (this.style.pointerEvents = "auto"), 100);
}

export function createOptions(type, data, id, zoneId) {
  if (data.hide) return;

  const option = document.createElement("div");
  // const iconElement = `<i class="fa-fw ${data.icon} option-icon" ${
  //   data.iconColor ? `style = color:${data.iconColor} !important` : null
  // }"></i>`;

  option.innerHTML = `<div class="hexagon">
      <svg width="18" height="18" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_265_284)">
          <path d="m7 2 6.928 4v8L7 16 .072 12V6L7 2Z" fill="#272E41"/> <!-- Adjusted path to lower it -->
        </g>
        <path d="M1.072 4.577 7 1.155l5.928 3.422v6.846L7 14.845l-5.928-3.422V4.577Z" stroke="url(#paint0_linear_265_284)" stroke-opacity=".45" stroke-width="2"/>
        <defs>
          <linearGradient id="paint0_linear_265_284" x1="7" y1="0" x2="7" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
  </div>
  <p class="option-label">${data.label}</p>`;
  option.className = "option-container";
  option.targetType = type;
  option.targetId = id;
  option.zoneId = zoneId;

  option.addEventListener("click", onClick);
  optionsWrapper.appendChild(option);
}
