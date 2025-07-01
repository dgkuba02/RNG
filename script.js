const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const resultDiv = document.getElementById("result");

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

minInput.addEventListener("input", () => {
  let val = parseInt(minInput.value);
  const minLimit = parseInt(minRange.min);
  const maxLimit = parseInt(maxInput.value || maxRange.value);
  val = isNaN(val) ? minLimit : clamp(val, minLimit, maxLimit);
  minInput.value = val;
  minRange.value = val;
});

minRange.addEventListener("input", () => {
  const val = clamp(
    parseInt(minRange.value),
    parseInt(minRange.min),
    parseInt(maxRange.value)
  );
  minRange.value = val;
  minInput.value = val;
});

maxInput.addEventListener("input", () => {
  let val = parseInt(maxInput.value);
  const maxLimit = parseInt(maxRange.max || 100);
  const minLimit = parseInt(minInput.value || minRange.value);
  val = isNaN(val) ? maxLimit : clamp(val, minLimit, maxLimit);
  maxInput.value = val;
  maxRange.value = val;
});

maxRange.addEventListener("input", () => {
  const val = clamp(
    parseInt(maxRange.value),
    parseInt(minRange.value),
    parseInt(maxRange.max)
  );
  maxRange.value = val;
  maxInput.value = val;
});

function generateRandom() {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max)) {
    resultDiv.innerHTML = `<span class="error">Invalid input.</span>`;
    return;
  }

  if (min > max) {
    resultDiv.innerHTML = `<span class="error">Min > Max!</span>`;
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  resultDiv.textContent = `${randomNumber}`;
}
