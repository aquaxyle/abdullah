
document.addEventListener("DOMContentLoaded", () => {
  // LITTLE ROOM INTERACTIONS
  const room = document.getElementById("room");
  const lamp = document.getElementById("lamp");
  const mug = document.getElementById("mug");
  const cat = document.getElementById("cat");
  const toast = document.getElementById("roomToast");

  let toastTimeout;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("visible");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("visible");
    }, 2300);
  }

  let lampOn = true;

  lamp.addEventListener("click", () => {
    lampOn = !lampOn;
    room.classList.toggle("lights-off", !lampOn);

    showToast(
      lampOn
        ? "a little light for you ✦"
        : "rest mode activated ☾"
    );
  });

  const teaMessages = [
    "virtual chai, made with love ♡",
    "drink some actual water too, please",
    "a warm little break for you",
    "the tea believes in you. so do i."
  ];

  let teaIndex = 0;

  mug.addEventListener("click", () => {
    showToast(teaMessages[teaIndex]);
    teaIndex = (teaIndex + 1) % teaMessages.length;
  });

  const catMessages = [
    "prrrrr... ♡",
    "the cat thinks you're doing great",
    "meow. take a break.",
    "you have been chosen by the cat."
  ];

  let catIndex = 0;

  cat.addEventListener("click", () => {
    showToast(catMessages[catIndex]);
    catIndex = (catIndex + 1) % catMessages.length;

    cat.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(-8deg)" },
        { transform: "rotate(8deg)" },
        { transform: "rotate(0deg)" }
      ],
      { duration: 450, easing: "ease-in-out" }
    );
  });

  // THE LETTER
  const envelope = document.getElementById("envelope");
  const letterContent = document.getElementById("letterContent");
  const letterPrompt = document.getElementById("letterPrompt");

  let letterOpen = false;

  function toggleLetter() {
    letterOpen = !letterOpen;

    envelope.classList.toggle("open", letterOpen);
    envelope.setAttribute("aria-expanded", String(letterOpen));
    letterContent.hidden = !letterOpen;

    letterPrompt.textContent = letterOpen
      ? "a little reminder, just for you ♡"
      : "a little something for you. click to open.";
  }

  envelope.addEventListener("click", toggleLetter);

  envelope.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleLetter();
    }
  });

  // EMERGENCY KINDNESS DISPENSER
  const messages = [
    "you are a person, not a productivity machine.",
    "one exam cannot measure everything wonderful about you.",
    "you've survived 100% of your worst study days so far.",
    "please be nice to abdullah. he's my best friend.",
    "you don't have to figure everything out tonight.",
    "your worth does not come with a grading rubric.",
    "the world will not end if you take a little break.",
    "you're allowed to have an unproductive day.",
    "somewhere out there, a tiny cat is rooting for you.",
    "you are doing better than your anxious brain thinks.",
    "this is your official permission slip to rest.",
    "you deserve good things, even when you're struggling.",
    "i'm proud of you for trying. genuinely.",
    "drink water. stretch. the academic demons can wait.",
    "you don't have to be perfect to make me proud.",
    "if today was difficult, tomorrow gets a fresh page."
  ];

  const kindnessButton = document.getElementById("kindnessButton");
  const kindnessMessage = document.getElementById("kindnessMessage");
  const kindnessCount = document.getElementById("kindnessCount");

  let currentMessage = 0;
  let clicks = 1;

  kindnessButton.addEventListener("click", () => {
    // Move to a different message every click.
    const offset = 1 + Math.floor(Math.random() * (messages.length - 1));
    currentMessage = (currentMessage + offset) % messages.length;

    kindnessMessage.classList.remove("pop");
    void kindnessMessage.offsetWidth;

    kindnessMessage.textContent = messages[currentMessage];
    kindnessMessage.classList.add("pop");

    clicks++;
    kindnessCount.textContent =
      `tiny reminder no. ${String(clicks).padStart(2, "0")}`;
  });
});
