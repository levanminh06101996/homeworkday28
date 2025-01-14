function countdownTime() {
  setInterval(() => {
    const currentDate = new Date();
    const futureTime = new Date("2026-01-01 00:00:00");
    const day = Math.round(
      (futureTime.getTime() - currentDate) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.round(
      (futureTime.getTime() - currentDate) / (1000 * 60 * 60)
    );
    const minutes = Math.round(
      (futureTime.getTime() - currentDate) / (1000 * 60)
    );
    const seconds = Math.round((futureTime.getTime() - currentDate) / 1000);

    let content = `còn ${day} ngày ${hours} giờ ${minutes} phút ${seconds} giây là đến tết 2026`;
    document.write(content);
    document.close();
  }, 1000);
}
countdownTime();
