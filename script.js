const tarihInput = document.getElementById('tarih');
  const doktorSelect = document.getElementById('doktor');
  const musaitlikDiv = document.getElementById('musaitlik');

  // Tarih seçildiyse doktoru aktif et
  tarihInput.addEventListener('change', function () {
    if (tarihInput.value) {
      doktorSelect.disabled = false;
    } else {
      doktorSelect.disabled = true;
      doktorSelect.value = "";
      musaitlikDiv.innerHTML = "";
    }
  });

  // Doktor seçildiğinde rastgele müsait tarihler göster
  doktorSelect.addEventListener('change', function () {
    if (!doktorSelect.value) return;

    const selectedDate = new Date(tarihInput.value);
    const availableDates = [];

    for (let i = 0; i < 5; i++) {
      // 1 ile 30 gün arasında rastgele bir gün ekle
      const randomDaysToAdd = Math.floor(Math.random() * 30) + 1;
      const newDate = new Date(selectedDate);
      newDate.setDate(newDate.getDate() + randomDaysToAdd);

      const formattedDate = newDate.toISOString().split('T')[0];
      availableDates.push(formattedDate);
    }
    // HTML olarak müsaitlikleri yazdır
    musaitlikDiv.innerHTML = `<strong>${doktorSelect.options[doktorSelect.selectedIndex].text} şu tarihlerde müsait:</strong><ul>${availableDates.map(date => `<li>${date}</li>`).join('')}</ul>`;
 
});  
  document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    if (path.includes("hakkimizda.html")) {
      const firstSection = document.querySelector("section");
      if (firstSection) {
        firstSection.style.marginTop = "100px";
      }
    }
  });