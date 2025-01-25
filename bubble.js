const array = new Array(10).fill(0).map(() => Math.floor(10 * Math.random() + 1));
console.log(array);

const renderbar = () => {
    const barContainer = document.getElementById("bar");
    // Clear existing bars
    barContainer.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        // Create divisions for bars
        const division = document.createElement("div");
        division.classList.add("bar_div");

        // CSS properties for each bar
        division.style.backgroundColor = "red";
        division.style.height = `${32.2 * array[i]}px`;
        division.style.width = "16.66px";

        // Append to the container
        barContainer.appendChild(division);
    }
};

// Event listener for "New Array" button
const newArrayBtn = document.querySelector(".btn-1");
newArrayBtn.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(10 * Math.random() + 1);
    }
    renderbar();
});

// Function to visualize the swapping of bars
async function swap(ele1, ele2) {
    const style1 = window.getComputedStyle(ele1);
    const style2 = window.getComputedStyle(ele2);

    const height1 = style1.getPropertyValue("height");
    const height2 = style2.getPropertyValue("height");

    // Swap heights visually
    ele1.style.height = height2;
    ele2.style.height = height1;

    // Swap corresponding array values
    const index1 = Array.from(ele1.parentNode.children).indexOf(ele1);
    const index2 = Array.from(ele2.parentNode.children).indexOf(ele2);

    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    await new Promise((resolve) => setTimeout(resolve, 50)); // Delay for visualization
}

// Bubble Sort Visualization
async function bubbleSortVisualization() {
    const bars = document.getElementsByClassName("bar_div");
    const n = bars.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const height1 = parseInt(bars[j].style.height);
            const height2 = parseInt(bars[j + 1].style.height);

            // Highlight bars being compared
            bars[j].style.backgroundColor = "yellow";
            bars[j + 1].style.backgroundColor = "yellow";

            await new Promise((resolve) => setTimeout(resolve, 50));

            if (height1 > height2) {
                // Swap if needed
                await swap(bars[j], bars[j + 1]);
            }

            // Revert colors back
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
        }

        // Mark the last sorted bar
        bars[n - i - 1].style.backgroundColor = "#00f67f";
    }

    bars[0].style.backgroundColor = "#00f67f";
}

// Event listener for the "Bubble Sort" button
const bubbleBtn = document.querySelector(".btn-2");
bubbleBtn.addEventListener("click", async () => {
    await bubbleSortVisualization();
});

// Render initial bars
renderbar();
