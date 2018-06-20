var topic = [
    "認識抹茶",
    "抹茶初嘗",
    "與抹茶的約會",
    "抹茶與人生",
    "論抹茶於世界之重要性",
    "你就是我要的抹茶"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setSeconds(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);