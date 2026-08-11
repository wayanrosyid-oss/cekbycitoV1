/* =========================================================
   CEK BY CITO — Checklist Pendakian Pribadi
   Standalone PWA, offline-first, tanpa server.
========================================================= */

/* ---------- Preset barang default ----------
   [kategori, nama, jenisBawaan('tas'|'habis'|'badan'), termasukOneDay(0/1)] */
const PRESET_ITEMS = [["Dokumen", "KTP", "tas", 1], ["Dokumen", "Surat Sehat/SKD", "tas", 1], ["Dokumen", "Kartu Asuransi", "tas", 1], ["Dokumen", "Fotokopi KTP & KK", "tas", 1], ["Dokumen", "Surat Izin Orang Tua", "tas", 1], ["Dokumen", "Kartu Pelajar/Mahasiswa", "tas", 1], ["Dokumen", "SIMAKSI/Tiket Registrasi", "tas", 1], ["Dokumen", "Kartu Anggota Organisasi", "tas", 1], ["Dokumen", "Kontak Darurat Tertulis", "tas", 1], ["Pakaian", "Jaket Gunung/Windbreaker", "badan", 1], ["Pakaian", "Jas Hujan/Ponco", "tas", 1], ["Pakaian", "Kaos Ganti", "tas", 1], ["Pakaian", "Celana Lapangan/Quick-dry", "badan", 1], ["Pakaian", "Celana Dalam Ganti", "tas", 1], ["Pakaian", "Kaos Kaki Cadangan", "tas", 1], ["Pakaian", "Sarung Tangan", "tas", 1], ["Pakaian", "Buff/Slayer", "tas", 1], ["Pakaian", "Kupluk/Beanie", "tas", 1], ["Pakaian", "Baselayer Atas", "tas", 1], ["Pakaian", "Baselayer Bawah/Legging", "tas", 1], ["Pakaian", "Rompi/Vest", "tas", 1], ["Pakaian", "Ikat Pinggang", "badan", 1], ["Pakaian", "Baju Tidur Khusus", "tas", 1], ["Alas Kaki", "Sepatu Gunung", "badan", 1], ["Alas Kaki", "Sandal Gunung/Camp", "tas", 1], ["Alas Kaki", "Kaos Kaki Wol/Tebal", "tas", 1], ["Alas Kaki", "Gaiter", "tas", 1], ["Alas Kaki", "Sepatu Cadangan", "tas", 1], ["Peralatan Tidur", "Sleeping Bag", "tas", 0], ["Peralatan Tidur", "Matras", "tas", 0], ["Peralatan Tidur", "Flysheet", "tas", 0], ["Peralatan Tidur", "Tenda", "tas", 0], ["Peralatan Tidur", "Bantal Tiup/Kecil", "tas", 0], ["Peralatan Tidur", "Sleeping Bag Liner", "tas", 0], ["Peralatan Masak & Makan", "Alat Makan Pribadi", "tas", 1], ["Peralatan Masak & Makan", "Kompor Portable", "tas", 0], ["Peralatan Masak & Makan", "Gas Kaleng/Kompor Gas", "tas", 0], ["Peralatan Masak & Makan", "Nesting/Panci Kecil", "tas", 0], ["Peralatan Masak & Makan", "Botol/Tempat Bumbu", "tas", 0], ["Peralatan Masak & Makan", "Pisau Lipat/Multitool", "tas", 1], ["Peralatan Masak & Makan", "Korek Api/Pematik Cadangan", "tas", 1], ["Peralatan Masak & Makan", "Spons & Sabun Cuci Alat Makan", "tas", 1], ["Makanan & Minuman", "Air Minum", "habis", 1], ["Makanan & Minuman", "Makanan Berat/Logistik Utama", "habis", 0], ["Makanan & Minuman", "Snack Pribadi", "habis", 1], ["Makanan & Minuman", "Multivitamin", "habis", 1], ["Makanan & Minuman", "Madu/Energen", "habis", 1], ["Makanan & Minuman", "Kopi/Teh Sachet", "habis", 1], ["Makanan & Minuman", "Garam & Bumbu Masak", "habis", 0], ["Makanan & Minuman", "Makanan Cadangan Darurat", "habis", 1], ["Navigasi & Penerangan", "Headlamp", "tas", 1], ["Navigasi & Penerangan", "Baterai Cadangan Headlamp", "tas", 1], ["Navigasi & Penerangan", "Powerbank", "tas", 1], ["Navigasi & Penerangan", "Kabel Charger", "tas", 1], ["Navigasi & Penerangan", "Peta Jalur/Kontur", "tas", 1], ["Navigasi & Penerangan", "Kompas", "tas", 1], ["Navigasi & Penerangan", "GPS/Aplikasi Offline", "tas", 1], ["Navigasi & Penerangan", "Peluit Tanda Bahaya", "tas", 1], ["P3K & Keamanan", "Obat Pribadi", "tas", 1], ["P3K & Keamanan", "P3K Dasar", "tas", 1], ["P3K & Keamanan", "Obat Anti Mabuk/Diare/Sakit Kepala", "tas", 1], ["P3K & Keamanan", "Minyak Kayu Putih/Balsem", "tas", 1], ["P3K & Keamanan", "Tabir Surya (Sunscreen)", "tas", 1], ["P3K & Keamanan", "Lip Balm", "tas", 1], ["P3K & Keamanan", "Krim Anti Gigitan Serangga", "tas", 1], ["P3K & Keamanan", "Masker Debu/Buff Pelindung Wajah", "tas", 1], ["Elektronik", "Kamera", "tas", 1], ["Elektronik", "Baterai Cadangan Kamera", "tas", 1], ["Elektronik", "Memory Card", "tas", 1], ["Elektronik", "Tripod/Gimbal", "tas", 1], ["Elektronik", "Drone", "tas", 1], ["Elektronik", "Charger", "tas", 1], ["Perlengkapan Lain", "Carrier/Tas Gunung", "badan", 1], ["Perlengkapan Lain", "Rain Cover Carrier", "tas", 1], ["Perlengkapan Lain", "Trash Bag", "tas", 1], ["Perlengkapan Lain", "Tali/Webbing/Carabiner", "tas", 0], ["Perlengkapan Lain", "Trekking Pole", "badan", 1], ["Perlengkapan Lain", "Sarung Parang/Pisau Lapangan", "tas", 1], ["Perlengkapan Lain", "Plastik Ziplock", "tas", 1], ["Perlengkapan Lain", "Uang Tunai Cadangan", "tas", 1], ["Perlengkapan Lain", "Alat Tulis Kecil", "tas", 1]];

const CATEGORY_ICONS = {
  "Dokumen":"📄", "Pakaian":"👕", "Alas Kaki":"👢", "Peralatan Tidur":"🛌",
  "Peralatan Masak & Makan":"🍳", "Makanan & Minuman":"🍫", "Navigasi & Penerangan":"🔦",
  "P3K & Keamanan":"🩹", "Elektronik":"📷", "Perlengkapan Lain":"🎒"
};
const ALL_CATEGORIES = [...new Set(PRESET_ITEMS.map(i=>i[0]))];

const DURATION_LABELS = { oneday:"One Day", "2d1n":"2D1N", "3d2n":"3D2N", "4d3n":"4D3N+" };

/* ---------- helpers ---------- */
function uid(prefix){ return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function el(sel){ return document.querySelector(sel); }
function els(sel){ return Array.from(document.querySelectorAll(sel)); }
function escapeHtml(s){ return (s==null?"":String(s)).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function fmtKg(grams){
  if(!grams || grams<=0) return "0 g";
  if(grams < 1000) return Math.round(grams) + " g";
  const kg = grams/1000;
  return (kg % 1 === 0 ? kg.toFixed(0) : kg.toFixed(1)) + " kg";
}
function toast(msg){
  const t = el("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>t.classList.remove("show"), 2400);
}
function openSheet(id){ el(id).classList.add("open"); }
function closeSheet(id){ el(id).classList.remove("open"); }

/* ---------- storage ---------- */
const LS_TRIPS = "cbc_trips";
const LS_THEME = "cbc_theme";
const LS_ONBOARDED = "cbc_onboarded";

function loadTrips(){
  try{
    const raw = localStorage.getItem(LS_TRIPS);
    if(!raw) return [];
    return JSON.parse(raw);
  }catch(e){ return []; }
}
function saveTrips(){ localStorage.setItem(LS_TRIPS, JSON.stringify(trips)); }

let trips = loadTrips();
let currentTripId = null;

/* ---------- create new trip ---------- */
function buildItemsForDuration(duration){
  const isOneDay = duration === "oneday";
  const source = isOneDay ? PRESET_ITEMS.filter(i=>i[3]===1) : PRESET_ITEMS;
  return source.map(i=>({
    id: uid("it"),
    category: i[0],
    name: i[1],
    jenis: i[2], // 'tas' | 'habis' | 'badan'
    weight: null, // gram per unit, opsional
    qty: null,    // opsional, default dianggap 1
    checked: false,
    needsNote: false,
    note: ""
  }));
}

function weightTargetFromBodyWeight(bw){
  if(!bw || bw<=0) return null;
  const low = Math.round(bw * 0.20 * 10) / 10;
  const high = Math.round(bw * 0.25 * 10) / 10;
  return { low, high };
}

function createTrip(name, duration, bodyWeight){
  const trip = {
    id: uid("trip"),
    name: name || "Checklist Pendakian",
    duration: duration,
    bodyWeight: bodyWeight || null,
    target: weightTargetFromBodyWeight(bodyWeight), // {low, high} dalam kg, atau null
    targetManual: null, // {low, high} kalau user set manual
    bagWeight: null, // berat kosong tas, gram, manual
    pinned: false,
    finished: false,
    createdAt: Date.now(),
    finishedAt: null,
    items: buildItemsForDuration(duration)
  };
  trips.unshift(trip);
  saveTrips();
  return trip;
}

function getTrip(id){ return trips.find(t=>t.id===id); }

function deleteTrip(id){
  trips = trips.filter(t=>t.id!==id);
  saveTrips();
}

function resetTrip(id){
  const t = getTrip(id);
  if(!t) return;
  t.items.forEach(i=>{ i.checked=false; i.note=""; });
  t.finished = false;
  t.finishedAt = null;
  saveTrips();
}

function finishTrip(id){
  const t = getTrip(id);
  if(!t) return;
  t.finished = true;
  t.finishedAt = Date.now();
  saveTrips();
}

function togglePin(id){
  const t = getTrip(id);
  if(!t) return;
  t.pinned = !t.pinned;
  saveTrips();
}

/* ---------- weight calculation ---------- */
function computeWeights(trip){
  let base=0, habis=0, badan=0;
  let anyWeight = false;
  trip.items.forEach(i=>{
    if(!i.checked) return;
    if(i.weight==null || i.weight<=0) return;
    anyWeight = true;
    const qty = (i.qty && i.qty>0) ? i.qty : 1;
    const total = i.weight * qty;
    if(i.jenis==="tas") base += total;
    else if(i.jenis==="habis") habis += total;
    else if(i.jenis==="badan") badan += total;
  });
  const bagW = trip.bagWeight || 0;
  if(bagW>0) anyWeight = true;
  const baseWeight = base + bagW;
  const packWeight = baseWeight + habis;
  const totalWeight = packWeight + badan;
  return { anyWeight, baseWeight, packWeight, totalWeight };
}

function getEffectiveTarget(trip){
  return trip.targetManual || trip.target || null;
}

/* =========================================================
   NAVIGATION
========================================================= */
const MAIN_VIEWS = ["view-home","view-list","view-tips","view-exportlist"];

function showView(id){
  els(".view").forEach(v=>v.classList.remove("active"));
  el("#"+id).classList.add("active");
  if(MAIN_VIEWS.includes(id)){
    els(".navbtn").forEach(b=>b.classList.toggle("active", b.dataset.view===id));
  }
  window.scrollTo(0,0);
}

els(".navbtn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const target = btn.dataset.view;
    showView(target);
    if(target==="view-list") renderTripList();
    if(target==="view-exportlist") renderExportList();
  });
});

els("[data-back]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const target = btn.dataset.back;
    showView(target);
    if(target==="view-list") renderTripList();
    if(target==="view-home"){ /* nothing extra */ }
  });
});

el("#homeTipsBtn").addEventListener("click", ()=> showView("view-tips"));
el("#newTripBtn").addEventListener("click", ()=>{
  el("#nt_name").value = "";
  el("#nt_weight").value = "";
  selectedDuration = "oneday";
  els("#nt_duration .dur-opt").forEach(o=>o.classList.toggle("sel", o.dataset.dur==="oneday"));
  showView("view-newtrip");
});

/* ---------- new trip form ---------- */
let selectedDuration = "oneday";
els("#nt_duration .dur-opt").forEach(opt=>{
  opt.addEventListener("click", ()=>{
    els("#nt_duration .dur-opt").forEach(o=>o.classList.remove("sel"));
    opt.classList.add("sel");
    selectedDuration = opt.dataset.dur;
  });
});
el("#nt_skip").addEventListener("click", ()=>{
  el("#nt_weight").value = "";
  toast("Oke, target berat bisa kamu atur manual nanti");
});
el("#nt_submit").addEventListener("click", ()=>{
  const name = el("#nt_name").value.trim() || "Checklist Pendakian";
  const bw = parseFloat(el("#nt_weight").value) || null;
  const trip = createTrip(name, selectedDuration, bw);
  currentTripId = trip.id;
  openDetail(trip.id);
});

/* =========================================================
   TRIP LIST (tab Checklist)
========================================================= */
function fmtDate(ts){
  if(!ts) return "";
  const d = new Date(ts);
  const months = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function renderTripList(){
  const c = el("#listContainer");
  if(!trips.length){
    c.innerHTML = `<div class="empty-state"><div class="empty-emoji">🎒</div>Belum ada checklist.<br>Yuk buat yang pertama!</div>`;
    return;
  }
  const sorted = [...trips].sort((a,b)=>{
    if(a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return b.createdAt - a.createdAt;
  });
  c.innerHTML = sorted.map(t=>{
    const w = computeWeights(t);
    const checkedCount = t.items.filter(i=>i.checked).length;
    const icon = t.finished ? "✅" : (CATEGORY_ICONS[t.items[0]?.category] || "⛰️");
    const weightBadge = w.anyWeight
      ? `<div class="badge-kg">${fmtKg(w.totalWeight)}</div>`
      : `<div class="badge-none">${t.finished ? "Selesai" : "Belum diisi"}</div>`;
    return `
      <div class="hist-item" data-trip="${t.id}">
        <div class="hist-ic">${icon}</div>
        <div class="hist-info">
          <div class="hist-name">${t.pinned ? "★ " : ""}${escapeHtml(t.name)}</div>
          <div class="hist-date">${DURATION_LABELS[t.duration]} · ${checkedCount}/${t.items.length} barang</div>
        </div>
        <div class="hist-tail">${weightBadge}</div>
      </div>`;
  }).join("");
  els("#listContainer .hist-item").forEach(item=>{
    item.addEventListener("click", ()=> openDetail(item.dataset.trip));
  });
}

/* =========================================================
   TRIP DETAIL
========================================================= */
function openDetail(tripId){
  currentTripId = tripId;
  renderDetail();
  showView("view-detail");
}

function renderDetail(){
  const t = getTrip(currentTripId);
  if(!t) return showView("view-list");

  el("#d_name").textContent = (t.pinned?"★ ":"") + t.name;
  const target = getEffectiveTarget(t);
  let metaTxt = DURATION_LABELS[t.duration];
  if(target) metaTxt += ` · Target ${target.low}-${target.high} kg`;
  if(t.finished) metaTxt += " · Selesai ✓";
  el("#d_meta").textContent = metaTxt;
  el("#pinBtn").textContent = t.pinned ? "★" : "☆";

  renderWeightPanel(t);
  renderItems(t);
}

function renderWeightPanel(t){
  const w = computeWeights(t);
  const panel = el("#d_weightpanel");
  if(!w.anyWeight){
    panel.innerHTML = `
      <div class="weight-panel">
        <div class="wp-empty">⚖️ Belum ada data berat.<br>Isi berat barang kalau mau lihat kalkulator ini.</div>
      </div>`;
    return;
  }
  const target = getEffectiveTarget(t);
  let pct = 0, notif = "";
  if(target && target.high>0){
    pct = Math.min(100, Math.round((w.totalWeight/1000) / target.high * 100));
    if((w.totalWeight/1000) > target.high){
      notif = `<div class="wp-notif">Sedikit lebih berat dari target. Masih oke, tapi boleh dicek ulang.</div>`;
    }
  } else {
    pct = 50;
  }
  panel.innerHTML = `
    <div class="weight-panel">
      <div class="wp-top">
        <div>
          <div class="wp-num">${fmtKg(w.totalWeight)}</div>
          <div class="wp-target">${target ? `dari target ${target.low}-${target.high} kg` : "belum ada target"}</div>
        </div>
      </div>
      <div class="wp-track"><div class="wp-fill" style="width:${pct}%"></div></div>
      <div class="wp-chips">
        <div class="wp-chip"><div class="n">${(w.baseWeight/1000).toFixed(1)}</div><div class="l">Base</div></div>
        <div class="wp-chip"><div class="n">${(w.packWeight/1000).toFixed(1)}</div><div class="l">Pack</div></div>
        <div class="wp-chip"><div class="n">${(w.totalWeight/1000).toFixed(1)}</div><div class="l">Total</div></div>
      </div>
      ${notif}
    </div>`;
}

/* ---------- state: item mana sedang dalam mode edit berat ---------- */
const expandedWeightItems = new Set();

function renderItems(t){
  const container = el("#d_items");
  const cats = [...new Set(t.items.map(i=>i.category))];
  let html = "";
  cats.forEach(cat=>{
    const items = t.items.filter(i=>i.category===cat);
    const checkedCount = items.filter(i=>i.checked).length;
    html += `<div class="cat-head"><span>${CATEGORY_ICONS[cat]||"📦"} ${escapeHtml(cat)}</span><span>${checkedCount}/${items.length}</span></div>`;
    items.forEach(i=>{
      const isEditingWeight = expandedWeightItems.has(i.id);
      const w = (i.weight && i.weight>0)
        ? `<span class="item-w" data-editw="${i.id}">${fmtKg(i.weight*(i.qty||1))} ✎</span>`
        : `<span class="item-w item-w-empty" data-editw="${i.id}">⚖️ isi berat</span>`;
      html += `
        <div class="item ${i.checked?'done':''}" data-item="${i.id}">
          <div class="cb ${i.checked?'on':''}" data-toggle="${i.id}">${i.checked?'✓':''}</div>
          <div class="item-body">
            <div class="item-top">
              <span class="item-name ${i.checked?'strike':''}">${escapeHtml(i.name)}</span>
              ${w}
            </div>
            ${(i.needsNote && i.checked) ? `<input class="item-note" data-note="${i.id}" value="${escapeHtml(i.note||'')}" placeholder="Isi jumlah, ukuran, atau catatan lain">` : ''}
            ${isEditingWeight ? `
            <div class="item-wedit">
              <div class="item-wedit-field">
                <label>Berat/unit (gram)</label>
                <input type="number" inputmode="numeric" data-wgt="${i.id}" value="${i.weight||''}" placeholder="Contoh: 300">
              </div>
              <div class="item-wedit-field">
                <label>Jumlah</label>
                <input type="number" inputmode="numeric" data-qty="${i.id}" value="${i.qty||1}" placeholder="1">
              </div>
              <button class="item-wedit-done" data-wdone="${i.id}">Selesai</button>
            </div>` : ''}
          </div>
          <div class="item-del" data-del="${i.id}" title="Hapus barang ini">✕</div>
        </div>`;
    });
  });
  container.innerHTML = html;

  els("#d_items [data-toggle]").forEach(cb=>{
    cb.addEventListener("click", ()=>{
      const t = getTrip(currentTripId);
      const item = t.items.find(i=>i.id===cb.dataset.toggle);
      item.checked = !item.checked;
      saveTrips();
      renderDetail();
    });
  });
  els("#d_items [data-note]").forEach(inp=>{
    inp.addEventListener("input", ()=>{
      const t = getTrip(currentTripId);
      const item = t.items.find(i=>i.id===inp.dataset.note);
      item.note = inp.value;
      saveTrips();
    });
  });
  els("#d_items [data-del]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      const t = getTrip(currentTripId);
      const idx = t.items.findIndex(i=>i.id===btn.dataset.del);
      if(idx===-1) return;
      const removedName = t.items[idx].name;
      t.items.splice(idx,1);
      saveTrips();
      renderDetail();
      toast(`"${removedName}" dihapus dari checklist`);
    });
  });
  els("#d_items [data-editw]").forEach(el2=>{
    el2.addEventListener("click", ()=>{
      const id = el2.dataset.editw;
      if(expandedWeightItems.has(id)) expandedWeightItems.delete(id);
      else expandedWeightItems.add(id);
      renderDetail();
    });
  });
  els("#d_items [data-wgt]").forEach(inp=>{
    inp.addEventListener("input", ()=>{
      const t = getTrip(currentTripId);
      const item = t.items.find(i=>i.id===inp.dataset.wgt);
      item.weight = parseFloat(inp.value) || null;
      saveTrips();
      renderWeightPanel(t);
    });
  });
  els("#d_items [data-qty]").forEach(inp=>{
    inp.addEventListener("input", ()=>{
      const t = getTrip(currentTripId);
      const item = t.items.find(i=>i.id===inp.dataset.qty);
      item.qty = parseFloat(inp.value) || null;
      saveTrips();
      renderWeightPanel(t);
    });
  });
  els("#d_items [data-wdone]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      expandedWeightItems.delete(btn.dataset.wdone);
      renderDetail();
    });
  });
}

/* ---------- pin / delete / refresh / gasss ---------- */
el("#pinBtn").addEventListener("click", ()=>{
  togglePin(currentTripId);
  renderDetail();
});

el("#deleteBtn").addEventListener("click", ()=> openSheet("#deleteOverlay"));
el("#deleteCancel").addEventListener("click", ()=> closeSheet("#deleteOverlay"));
el("#deleteConfirm").addEventListener("click", ()=>{
  deleteTrip(currentTripId);
  closeSheet("#deleteOverlay");
  toast("Checklist dihapus");
  showView("view-list");
  renderTripList();
});

el("#refreshBtn").addEventListener("click", ()=> openSheet("#resetOverlay"));
el("#resetCancel").addEventListener("click", ()=> closeSheet("#resetOverlay"));
el("#resetConfirm").addEventListener("click", ()=>{
  resetTrip(currentTripId);
  closeSheet("#resetOverlay");
  toast("Checklist direset, siap dipakai ulang");
  renderDetail();
});

el("#gasssBtn").addEventListener("click", ()=>{
  finishTrip(currentTripId);
  toast("Siap berangkat! Checklist masuk riwayat 👊");
  openExportPreview(currentTripId);
});

/* ---------- add item manual ---------- */
el("#addItemBtn").addEventListener("click", ()=>{
  const catSelect = el("#ai_category");
  catSelect.innerHTML = ALL_CATEGORIES.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  el("#ai_name").value = "";
  el("#ai_weight").value = "";
  el("#ai_qty").value = "";
  el("#ai_jenis").value = "tas";
  openSheet("#addItemOverlay");
});
el("#ai_cancel").addEventListener("click", ()=> closeSheet("#addItemOverlay"));
el("#ai_save").addEventListener("click", ()=>{
  const name = el("#ai_name").value.trim();
  if(!name){ toast("Nama barang wajib diisi"); return; }
  const t = getTrip(currentTripId);
  t.items.push({
    id: uid("it"),
    category: el("#ai_category").value,
    name: name,
    jenis: el("#ai_jenis").value,
    weight: parseFloat(el("#ai_weight").value) || null,
    qty: parseFloat(el("#ai_qty").value) || null,
    checked: false,
    needsNote: false,
    note: ""
  });
  saveTrips();
  closeSheet("#addItemOverlay");
  toast("Barang ditambahkan");
  renderDetail();
});

/* =========================================================
   EXPORT
========================================================= */
function renderExportList(){
  const c = el("#exportListContainer");
  if(!trips.length){
    c.innerHTML = `<div class="empty-state"><div class="empty-emoji">📤</div>Belum ada checklist untuk di-export.</div>`;
    return;
  }
  const sorted = [...trips].sort((a,b)=> b.createdAt - a.createdAt);
  c.innerHTML = sorted.map(t=>{
    const w = computeWeights(t);
    const checkedCount = t.items.filter(i=>i.checked).length;
    return `
      <div class="exp-item" data-trip="${t.id}">
        <div class="hist-ic">📤</div>
        <div class="hist-info">
          <div class="hist-name">${t.pinned?"★ ":""}${escapeHtml(t.name)}</div>
          <div class="hist-date">${DURATION_LABELS[t.duration]} · ${checkedCount}/${t.items.length} barang</div>
        </div>
        <div class="hist-tail">${w.anyWeight ? `<div class="badge-kg">${fmtKg(w.totalWeight)}</div>` : ''}</div>
      </div>`;
  }).join("");
  els("#exportListContainer .exp-item").forEach(item=>{
    item.addEventListener("click", ()=> openExportPreview(item.dataset.trip));
  });
}

let exportTripId = null;
function openExportPreview(tripId){
  exportTripId = tripId;
  const t = getTrip(tripId);
  if(!t) return;
  const w = computeWeights(t);
  const checkedCount = t.items.filter(i=>i.checked).length;
  el("#exp_trip").textContent = `${t.name} · ${DURATION_LABELS[t.duration]}`;
  el("#exp_weight").textContent = w.anyWeight ? `Total berat: ${fmtKg(w.totalWeight)}` : "Berat tidak dicatat";
  el("#exp_count").textContent = `${t.items.length} barang · ${checkedCount} dicentang`;
  showView("view-exportpreview");
}

el("#exportImgBtn").addEventListener("click", ()=> exportAsImage());
el("#exportPdfBtn").addEventListener("click", ()=> exportAsPdf());

function buildExportCanvas(){
  const t = getTrip(exportTripId);
  const w = computeWeights(t);
  const checkedItems = t.items.filter(i=>i.checked);

  const canvas = document.createElement("canvas");
  const W = 720;
  const lineHeight = 30;
  const headerH = 200;
  const footerH = 70;
  const H = headerH + checkedItems.length * lineHeight + footerH + 40;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const isDark = document.body.getAttribute("data-theme")==="dark";
  const bg = isDark ? "#14180F" : "#EFF3DD";
  const card = isDark ? "#202619" : "#FFFFFF";
  const ink = isDark ? "#EDEFE2" : "#223318";
  const inkSoft = isDark ? "#9BA488" : "#6E7A5E";
  const forest = isDark ? "#7BC950" : "#2F6D16";

  ctx.fillStyle = bg;
  ctx.fillRect(0,0,W,H);

  ctx.fillStyle = card;
  roundRect(ctx, 24, 24, W-48, H-48, 20);
  ctx.fill();

  // watermark row
  ctx.fillStyle = forest;
  ctx.font = "bold 22px sans-serif";
  ctx.fillText("Cek by Cito", 56, 68);
  ctx.strokeStyle = isDark ? "#313A24" : "#E1E4CE";
  ctx.beginPath(); ctx.moveTo(56, 84); ctx.lineTo(W-56, 84); ctx.stroke();

  ctx.fillStyle = ink;
  ctx.font = "bold 28px sans-serif";
  ctx.fillText(t.name, 56, 128);
  ctx.fillStyle = inkSoft;
  ctx.font = "15px sans-serif";
  ctx.fillText(`${DURATION_LABELS[t.duration]}${w.anyWeight ? " · Total " + fmtKg(w.totalWeight) : ""}`, 56, 154);
  ctx.fillText(`${t.items.length} barang · ${checkedItems.length} dicentang`, 56, 176);

  let y = headerH;
  ctx.font = "16px sans-serif";
  checkedItems.forEach(item=>{
    ctx.fillStyle = forest;
    ctx.fillText("✓", 56, y);
    ctx.fillStyle = ink;
    ctx.fillText(item.name, 84, y);
    if(item.note){
      ctx.fillStyle = inkSoft;
      ctx.font = "13px sans-serif";
      ctx.fillText("— " + item.note, 84, y+18);
      y += 18;
      ctx.font = "16px sans-serif";
    }
    y += lineHeight;
  });

  ctx.fillStyle = inkSoft;
  ctx.font = "12px sans-serif";
  ctx.fillText("Dibuat dengan Cek by Cito — Teman Packing Sebelum Pendakian", 56, H-40);

  return canvas;
}
function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}

function exportAsImage(){
  const canvas = buildExportCanvas();
  canvas.toBlob(blob=>{
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const t = getTrip(exportTripId);
    a.href = url;
    a.download = `checklist-${(t.name||"trip").replace(/[^a-z0-9]/gi,"-").toLowerCase()}.jpg`;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url), 3000);
    toast("Gambar berhasil disimpan");
  }, "image/jpeg", 0.92);
}

function exportAsPdf(){
  const canvas = buildExportCanvas();
  const imgData = canvas.toDataURL("image/jpeg", 0.92);
  const w = window.open("", "_blank");
  if(!w){ toast("Izinkan pop-up untuk export PDF"); return; }
  w.document.write(`<html><head><title>Export Checklist</title></head><body style="margin:0">
    <img src="${imgData}" style="width:100%" onload="window.print()">
  </body></html>`);
  w.document.close();
}

/* =========================================================
   MENU: theme, stats, backup
========================================================= */
function loadTheme(){
  const saved = localStorage.getItem(LS_THEME);
  const theme = saved || "light";
  document.body.setAttribute("data-theme", theme);
}
function toggleTheme(){
  const cur = document.body.getAttribute("data-theme");
  const next = cur==="dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", next);
  localStorage.setItem(LS_THEME, next);
}

el("#menuBtn").addEventListener("click", ()=> openSheet("#menuOverlay"));
el("#menuCloseBtn").addEventListener("click", ()=> closeSheet("#menuOverlay"));
el("#themeToggleRow").addEventListener("click", ()=>{ toggleTheme(); });

el("#statsBtn").addEventListener("click", ()=> openStats());
el("#statsMenuRow").addEventListener("click", ()=>{ closeSheet("#menuOverlay"); openStats(); });
el("#statsClose").addEventListener("click", ()=> closeSheet("#statsOverlay"));

function openStats(){
  const totalTrips = trips.length;
  const finishedTrips = trips.filter(t=>t.finished).length;
  const uniqueMountains = new Set(trips.map(t=>t.name.split(",")[0].trim())).size;
  let totalWeightAll = 0;
  trips.forEach(t=>{ const w = computeWeights(t); totalWeightAll += w.totalWeight; });

  el("#statsGrid").innerHTML = `
    <div class="stat-card"><div class="stat-num">${totalTrips}</div><div class="stat-lbl">Checklist Dibuat</div></div>
    <div class="stat-card"><div class="stat-num">${finishedTrips}</div><div class="stat-lbl">Trip Selesai</div></div>
    <div class="stat-card"><div class="stat-num">${uniqueMountains}</div><div class="stat-lbl">Gunung Berbeda</div></div>
    <div class="stat-card"><div class="stat-num">${(totalWeightAll/1000).toFixed(1)}</div><div class="stat-lbl">Total Kg Dipacking</div></div>
  `;
  openSheet("#statsOverlay");
}

/* ---------- backup export/import ---------- */
el("#backupExportRow").addEventListener("click", ()=>{
  const data = { app:"cek-by-cito", version:1, exportedAt:Date.now(), trips };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cek-by-cito-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 3000);
  toast("Backup berhasil diunduh");
  closeSheet("#menuOverlay");
});

el("#backupImportRow").addEventListener("click", ()=>{
  el("#importFileInput").click();
});
el("#importFileInput").addEventListener("change", (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const data = JSON.parse(reader.result);
      if(!data.trips || !Array.isArray(data.trips)) throw new Error("format tidak valid");
      trips = data.trips.concat(trips);
      saveTrips();
      toast(`${data.trips.length} checklist berhasil diimport`);
      closeSheet("#menuOverlay");
      renderTripList();
    }catch(err){
      toast("Gagal import: file tidak valid");
    }
  };
  reader.readAsText(file);
  e.target.value = "";
});

/* =========================================================
   ONBOARDING (tutorial interaktif, muncul sekali di awal)
========================================================= */
const ONBOARD_STEPS = [
  { emoji:"🎒", title:"Selamat datang!", body:"Cek by Cito bantu kamu packing sebelum naik gunung — checklist pribadi, tanpa ribet, tanpa server." },
  { emoji:"➕", title:"Buat checklist", body:"Tiap trip bisa punya checklist sendiri. Pilih durasi, dan barang-barang penting otomatis muncul." },
  { emoji:"✅", title:"Centang saat packing", body:"Centang barang yang sudah masuk tas. Mau tambah catatan (jumlah, ukuran) juga bisa." },
  { emoji:"⚖️", title:"Cek berat (opsional)", body:"Isi berat barang kalau mau lihat total bawaanmu — base, pack, dan total weight." },
  { emoji:"👊", title:"Gasss!", body:"Kalau semua siap, tekan tombol Gasss. Checklist otomatis masuk riwayat, siap di-export jadi gambar." },
];
let onboardIdx = 0;
function renderOnboardStep(){
  const s = ONBOARD_STEPS[onboardIdx];
  const isLast = onboardIdx === ONBOARD_STEPS.length-1;
  el("#onboardContent").innerHTML = `
    <div style="text-align:center; padding:6px 6px 4px;">
      <div style="font-size:44px; margin-bottom:12px;">${s.emoji}</div>
      <h3 style="margin:0 0 8px;">${s.title}</h3>
      <div style="font-size:13.5px; color:var(--ink-soft); line-height:1.6; padding:0 8px;">${s.body}</div>
      <div style="display:flex; gap:5px; justify-content:center; margin-top:20px;">
        ${ONBOARD_STEPS.map((_,i)=>`<div style="width:6px;height:6px;border-radius:50%;background:${i===onboardIdx?'var(--forest)':'var(--line)'}"></div>`).join("")}
      </div>
    </div>
    <div class="sheet-row">
      ${onboardIdx>0 ? `<button class="btn-ghost" id="ob_prev">Kembali</button>` : `<button class="btn-ghost" id="ob_skip">Lewati</button>`}
      <button class="btn-confirm" id="ob_next">${isLast ? "Mulai Pakai" : "Lanjut"}</button>
    </div>`;
  const prevBtn = el("#ob_prev");
  if(prevBtn) prevBtn.addEventListener("click", ()=>{ onboardIdx--; renderOnboardStep(); });
  const skipBtn = el("#ob_skip");
  if(skipBtn) skipBtn.addEventListener("click", finishOnboarding);
  el("#ob_next").addEventListener("click", ()=>{
    if(isLast) finishOnboarding();
    else { onboardIdx++; renderOnboardStep(); }
  });
}
function finishOnboarding(){
  localStorage.setItem(LS_ONBOARDED, "1");
  closeSheet("#onboardOverlay");
}
function maybeShowOnboarding(){
  if(localStorage.getItem(LS_ONBOARDED)) return;
  onboardIdx = 0;
  renderOnboardStep();
  openSheet("#onboardOverlay");
}

/* =========================================================
   DECORATIVE DOODLES (SVG kecil, dekorasi tema pendakian)
========================================================= */
function renderDoodles(){
  const doodleSvg = `
    <svg class="doodle" style="top:8%; left:6%; width:34px;" viewBox="0 0 24 24" fill="none"><path d="M3 18l5-9 4 6 2-3 7 6H3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
    <svg class="doodle" style="top:14%; right:8%; width:28px; color:#F2952E;" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2 2M17.8 17.8l2 2M2 12h3M19 12h3M4.2 19.8l2-2M17.8 6.2l2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    <svg class="doodle" style="top:34%; left:4%; width:26px; color:#4C9A2A;" viewBox="0 0 24 24" fill="none"><path d="M12 2C8 6 6 10 6 13a6 6 0 0012 0c0-3-2-7-6-11z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
    <svg class="doodle" style="top:44%; right:5%; width:30px;" viewBox="0 0 24 24" fill="none"><rect x="6" y="9" width="12" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M9 9V6a3 3 0 016 0v3" stroke="currentColor" stroke-width="1.5"/></svg>
  `;
  els(".doodles").forEach(d=>{ d.innerHTML = doodleSvg; });
}

/* =========================================================
   SERVICE WORKER
========================================================= */
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").then(reg=>{
      reg.addEventListener("updatefound", ()=>{
        const newWorker = reg.installing;
        if(!newWorker) return;
        newWorker.addEventListener("statechange", ()=>{
          if(newWorker.state==="installed" && navigator.serviceWorker.controller){
            showUpdateBanner();
          }
        });
      });
    }).catch(()=>{});
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", ()=>{
      if(refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  });
}
function showUpdateBanner(){
  const bar = document.createElement("div");
  bar.style.cssText = "position:fixed; left:0; right:0; bottom:0; z-index:300; background:var(--forest-deep); color:#fff; padding:12px 16px calc(12px + env(safe-area-inset-bottom)); display:flex; align-items:center; justify-content:space-between; gap:10px; font-size:12.5px; box-shadow:0 -4px 16px rgba(0,0,0,.2);";
  bar.innerHTML = `<span>🔄 Update baru tersedia</span><button style="background:#fff; color:var(--forest-deep); border:none; border-radius:8px; padding:7px 14px; font-weight:700; font-size:12px;">Muat Ulang</button>`;
  bar.querySelector("button").addEventListener("click", ()=>{
    navigator.serviceWorker.getRegistration().then(reg=>{
      if(reg && reg.waiting) reg.waiting.postMessage({type:"SKIP_WAITING"});
      else window.location.reload();
    });
  });
  document.body.appendChild(bar);
}

/* =========================================================
   INIT
========================================================= */
loadTheme();
renderDoodles();
renderTripList();
maybeShowOnboarding();
