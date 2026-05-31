const popupOverlay = document.getElementById("popupOverlay");
const successPopup = document.getElementById("successPopup");
const newScheduleBtn = document.querySelector(".new-schedule-btn");
const confirmScheduleBtn = document.getElementById("confirmSchedule");
const cancelScheduleBtn = document.getElementById("cancelSchedule");

function closePopup() {
    popupOverlay.classList.remove("active");
}

if (newScheduleBtn) {
    newScheduleBtn.addEventListener("click", () => {
        popupOverlay.classList.add("active");
    });
}

if (cancelScheduleBtn) {
    cancelScheduleBtn.addEventListener("click", closePopup);
}

if (popupOverlay) {
    popupOverlay.addEventListener("click", (event) => {
        if (event.target === popupOverlay) {
            closePopup();
        }
    });
}

if (confirmScheduleBtn) {
    confirmScheduleBtn.addEventListener("click", () => {
        popupOverlay.classList.remove("active");

        if (successPopup) {
            successPopup.classList.add("active");
        }
    });
}

const closeSuccessPopup = document.getElementById("closeSuccessPopup");
if (closeSuccessPopup) {
    closeSuccessPopup.addEventListener("click", () => {
        successPopup.classList.remove("active");
    });
}

const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const horaSelect = document.getElementById("hora");

let currentDate = new Date();

const horariosDisponiveis = [
    "08:00",
    "09:00",
    "10:00",
    "14:00",
    "15:00",
    "16:00"
];

function renderCalendar() {
    if (!calendarDays || !monthYear) return;
    calendarDays.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    monthYear.textContent = currentDate.toLocaleDateString(
        "pt-BR",
        {month: "long", year: "numeric"}
    );

    for (let i = 0; i < firstDay; i++) {
        calendarDays.appendChild(
            document.createElement("div")
        );
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const btn = document.createElement("div");
        btn.className = "day";
        btn.textContent = day;
        const date = new Date(year, month, day);
        if (
            date <
            new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
            )
        ) {
            btn.classList.add("disabled");

        } else {
            btn.addEventListener("click", () => {
                document
                    .querySelectorAll(".day")
                    .forEach(item =>
                        item.classList.remove("selected")
                    );
                btn.classList.add("selected");
                carregarHorarios();
            });
        }
        calendarDays.appendChild(btn);
    }
}

const prevMonthBtn = document.getElementById("prevMonth");
if (prevMonthBtn) {
    prevMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(
            currentDate.getMonth() - 1
        );

        renderCalendar();
    });
}

const nextMonthBtn = document.getElementById("nextMonth");
if (nextMonthBtn) {
    nextMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(
            currentDate.getMonth() + 1
        );

        renderCalendar();
    });
}

function carregarHorarios() {

    if (!horaSelect) return;
    horaSelect.innerHTML = "";
    horariosDisponiveis.forEach(horario => {

        const option =
            document.createElement("option");

        option.value = horario;
        option.textContent = horario;

        horaSelect.appendChild(option);
    });
}

renderCalendar();