// ✅ افزودن ردیف جدید در جدول مسیر تحول
function addStep() {
  const table = document.getElementById("transformation-steps");
  if (!table) return; // اگر جدول وجود ندارد، خروج
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><input type="text" placeholder="مرحله جدید"></td>
    <td><input type="text" placeholder="شرح مختصر"></td>
    <td><input type="text" placeholder="نام مسئول"></td>
    <td><input type="date"></td>
  `;
  table.appendChild(newRow);
}

// ✅ ثبت اطلاعات و پاک‌سازی فرم
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector('input[type="submit"]');
  const form = document.querySelector("section");

  if (submitButton && form) {
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      alert("✅ اطلاعات ثبت شد. از مشارکت شما سپاسگزاریم.");

      const inputs = form.querySelectorAll("input, textarea, select");
      inputs.forEach(el => {
        if (el.tagName === "SELECT") {
          el.selectedIndex = 0;
        } else {
          el.value = "";
        }
      });
    });
  }
});
