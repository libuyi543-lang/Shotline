const initialShots = [
  {
    id: 1,
    beat: "家庭牵挂",
    purpose: "让出发首先成为一次家庭代价，而不是英雄启程。",
    viewpoint: "跟随李善德",
    framing: "中远景 · 35mm",
    angle: "平视",
    movement: "固定镜头",
    duration: "6.0",
    composition: "李善德位于画面左侧，妻女留在右侧门边。即将熄灭的油灯占据二者之间的空间。",
    cutLogic: "观众已经理解家庭代价，下一镜需要把犹豫转换成一个不可逆的动作。",
    prompt: "唐代天宝年间，破晓前的狭小民居。李善德身穿灰绿色圆领官服和旧棕色旅行披风，坐在画面左侧的行囊旁；妻子与女儿沉默地站在右侧门边。一盏即将熄灭的油灯隔在他们之间。中远景，平视，35mm，固定镜头，情绪克制，蓝灰色晨光，持续 6 秒。",
    position: "0% 0%"
  },
  {
    id: 2,
    beat: "决定成为行动",
    purpose: "用系紧文书筒的动作，表现李善德已经停止逃避。",
    viewpoint: "跟随李善德",
    framing: "特写 · 65mm",
    angle: "腰部高度",
    movement: "轻微推进",
    duration: "3.5",
    composition: "第一焦点是拉紧绳结的手，文书印记和算盘构成第二信息层；女儿扶门的手在背景虚焦。",
    cutLogic: "从人物状态切到决定性动作；绳结拉紧后，场景内部的问题已经结束。",
    prompt: "李善德粗糙的手拉紧腰间公文筒的系绳，小木算盘轻轻碰在筒身上；女儿扶住门框的手留在虚焦背景。特写，65mm，腰部高度，镜头轻微推进，朱红官印作为唯一暖色，冷调晨光，以绳结拉紧结束，持续 3.5 秒。",
    position: "100% 0%"
  },
  {
    id: 3,
    beat: "被城市吞没",
    purpose: "把个人的恐惧放进庞大、照常运转的长安秩序里。",
    viewpoint: "客观视点",
    framing: "大全景 · 28mm",
    angle: "平视",
    movement: "固定镜头",
    duration: "9.0",
    composition: "巨大城门和川流人群主导画面，李善德只是牵马向右移动的小人物。",
    cutLogic: "空间从家庭扩展为制度；人物穿过画面后，再切到城外道路完成离开。",
    prompt: "清晨的唐代长安南城门，官吏、货车、脚夫和商旅不断穿过画面。李善德只是一个牵着瘦马、从左向右移动的普通小人物，几乎被人流和巨大城门吞没。客观视点，大全景，平视，28mm，固定镜头，避免英雄化，持续 9 秒。",
    position: "0% 100%"
  },
  {
    id: 4,
    beat: "无法回头",
    purpose: "让漫长道路取代家庭空间，完成命运上的出发。",
    viewpoint: "跟随李善德",
    framing: "极远景 · 35mm",
    angle: "轻微俯视",
    movement: "缓慢前移",
    duration: "11.5",
    composition: "长安城墙停留在左后方，李善德和马向右进入雾中长路，人物不回头。",
    cutLogic: "以持续远离而非表情结束，让观众感受个人与任务尺度之间的落差。",
    prompt: "破晓后的长安城外，后侧方极远景。李善德与瘦马从左向右走上消失在雾中田野的南下道路，长安城墙停留在遥远的左后方。他始终没有回头。轻微俯视，35mm，镜头缓慢前移，安静而压迫，避免壮丽日落和英雄远征感，持续 11.5 秒。",
    position: "100% 100%"
  }
];

let shots = structuredClone(initialShots);
let selectedId = 1;

const $ = (selector) => document.querySelector(selector);
const shotGrid = $("#shotGrid");
const toast = $("#toast");

function currentShot() {
  return shots.find((shot) => shot.id === selectedId) || shots[0];
}

function renderShots() {
  shotGrid.innerHTML = "";
  $("#emptyBoard").hidden = shots.length > 0;
  shotGrid.hidden = shots.length === 0;
  shots.forEach((shot, index) => {
    const card = document.createElement("button");
    card.className = `shot-card${shot.id === selectedId ? " selected" : ""}`;
    card.innerHTML = `
      <div class="shot-image" style="background-position:${shot.position}"></div>
      <span class="main-shot-tag">主镜</span>
      <footer>
        <span>镜头 ${String(index + 1).padStart(2,"0")}</span>
        <strong>${shot.beat}</strong>
        <small>${shot.framing}</small>
        <time>${shot.duration}秒</time>
      </footer>`;
    card.addEventListener("click", () => { selectedId = shot.id; renderShots(); renderInspector(); });
    shotGrid.appendChild(card);
  });
  const total = shots.reduce((sum, shot) => sum + Number.parseFloat(shot.duration), 0);
  $("#sequenceSummary").textContent = `${shots.length} 个节拍 · ${shots.length} 个主镜 · ${total.toFixed(1)} 秒`;
}

function renderInspector() {
  const shot = currentShot();
  document.querySelectorAll(".inspector-panel input, .inspector-panel select, .inspector-panel textarea, .inspector-panel button, .sequence-tools button").forEach((el) => { el.disabled = !shot; });
  if (!shot) {
    $("#inspectorNumber").textContent = "尚未选择镜头";
    ["purpose", "beat", "angle", "composition", "cutLogic"].forEach((key) => { $(`#${key}`).textContent = "—"; });
    $("#videoPrompt").value = "";
    return;
  }
  const index = shots.findIndex((item) => item.id === shot.id);
  $("#inspectorNumber").textContent = `镜头 ${String(index + 1).padStart(2,"0")} / 已选择`;
  ["purpose","beat","angle","composition","cutLogic"].forEach((key) => {
    $(`#${key}`).textContent = shot[key];
  });
  $("#viewpoint").value = shot.viewpoint;
  $("#framing").value = shot.framing;
  $("#movement").value = shot.movement;
  $("#shotDuration").value = shot.duration;
  $("#videoPrompt").value = shot.prompt;
}

function selectNeighbor(offset) {
  const index = shots.findIndex((shot) => shot.id === selectedId);
  const target = index + offset;
  if (index < 0 || target < 0 || target >= shots.length) return;
  [shots[index], shots[target]] = [shots[target], shots[index]];
  renderShots(); renderInspector();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1500);
}

function recompilePrompt(shot) {
  const base = shot.prompt.replace(/\n\n镜头参数：[\s\S]*$/, "");
  shot.prompt = `${base}\n\n镜头参数：${shot.viewpoint}，${shot.framing}，${shot.movement}，时长 ${shot.duration} 秒，画幅 ${$("#aspect").value}，${$("#visual").value}。`;
}

$("#generateButton").addEventListener("click", () => {
  const button = $("#generateButton");
  button.classList.add("loading");
  button.querySelector("span").textContent = "正在载入示例 ";
  window.setTimeout(() => {
    shots = structuredClone(initialShots);
    const targetDuration = Number.parseFloat($("#duration").value) || 30;
    const scale = targetDuration / 30;
    let assignedDuration = 0;
    shots.forEach((shot, index) => {
      const scaled = index === shots.length - 1
        ? targetDuration - assignedDuration
        : Math.round(Number.parseFloat(shot.duration) * scale * 10) / 10;
      shot.duration = scaled.toFixed(1);
      assignedDuration += scaled;
      recompilePrompt(shot);
    });
    selectedId = shots[0].id;
    button.classList.remove("loading");
    button.querySelector("span").textContent = "载入示例主镜";
    renderShots(); renderInspector(); showToast("已载入 4 个示例主镜");
  }, 650);
});

$("#moveLeft").addEventListener("click", () => selectNeighbor(-1));
$("#moveRight").addEventListener("click", () => selectNeighbor(1));
$("#deleteShot").addEventListener("click", () => {
  const index = shots.findIndex((shot) => shot.id === selectedId);
  shots = shots.filter((shot) => shot.id !== selectedId);
  selectedId = shots[Math.min(index, shots.length - 1)]?.id;
  renderShots(); renderInspector();
});
$("#copyPrompt").addEventListener("click", async () => {
  await copyText($("#videoPrompt").value);
});
$("#videoPrompt").addEventListener("input", (event) => { const shot = currentShot(); if (shot) shot.prompt = event.target.value; });
$("#copyAllPrompts").addEventListener("click", async () => {
  const all = shots.map((shot, index) => `镜头 ${String(index + 1).padStart(2,"0")}｜${shot.beat}\n${shot.prompt}`).join("\n\n");
  await copyText(all);
});
$("#regenerateShot").addEventListener("click", () => {
  const shot = currentShot(); if (!shot) return;
  const original = initialShots.find((item) => item.id === shot.id) || initialShots[0];
  Object.assign(shot, structuredClone(original));
  renderShots(); renderInspector(); showToast("当前镜头已恢复示例内容");
});
["viewpoint","framing","movement"].forEach((key) => $("#" + key).addEventListener("change", (event) => {
  const shot = currentShot(); if (!shot) return; shot[key] = event.target.value; recompilePrompt(shot); renderShots(); renderInspector();
}));
$("#shotDuration").addEventListener("change", (event) => {
  const shot = currentShot(); if (!shot) return;
  const value = Math.max(0.5, Number.parseFloat(event.target.value) || 3);
  shot.duration = value.toFixed(1); recompilePrompt(shot); renderShots(); renderInspector();
});
document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key === "Enter") $("#generateButton").click(); });

renderShots();
renderInspector();

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); showToast("提示词已复制"); }
  catch { showToast("浏览器未允许复制，请选中文本手动复制"); }
}
$("#exportShots").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({ title: "Shotline 示例分镜", mode: "fixed-example", shots }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = "shotline-storyboard.json"; a.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
});
