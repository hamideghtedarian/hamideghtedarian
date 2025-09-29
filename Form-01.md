<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>فرم پیشنهاد بازدیدکننده – عبدالحمید اقتداریان</title>
  <style>
    body { font-family: sans-serif; direction: rtl; background: #f9f9f9; padding: 20px; }
    label { display: block; margin-top: 10px; font-weight: bold; }
    input, textarea, select { width: 100%; padding: 8px; margin-top: 5px; }
    .section { background: #fff; padding: 15px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 0 5px #ccc; }
    h2 { color: #2c3e50; }
  </style>
</head>
<body>

  <div class="section">
    <h2>📝 فرم پیشنهاد بازدیدکننده</h2>
    <label>نام و نام خانوادگی:</label>
    <input type="text" name="visitor_name">

    <label>واحد یا بخش بازدیدشده:</label>
    <input type="text" name="visited_unit">

    <label>تاریخ بازدید:</label>
    <input type="date" name="visit_date">

    <label>هدف بازدید:</label>
    <textarea name="visit_purpose"></textarea>

    <label>نقاط قوت مشاهده‌شده:</label>
    <textarea name="strengths"></textarea>

    <label>نقاط قابل بهبود:</label>
    <textarea name="improvements"></textarea>

    <label>پیشنهادات مشخص:</label>
    <textarea name="suggestions"></textarea>

    <label>آیا مایل به پیگیری پیشنهاد هستید؟</label>
    <select name="follow_up">
      <option value="yes">بله</option>
      <option value="no">خیر</option>
    </select>

    <label>امضا یا شناسه بازدیدکننده:</label>
    <input type="text" name="visitor_id">
  </div>

  <button onclick="window.print()">🖨️ چاپ فرم</button>

</body>
</html>
