fetch("https://chat/chatResult", {
    method: "POST",
    body: JSON.stringify({ message: "يوجد ثغرة xss داخل السيرفر تم فتح تذكرة لاعلامكم بها saad" }),
});
