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

async function selectionSortVisualization()
{
    const bar = document.getElementsByClassName("bar_div");
    const n = bar.length;

    for(int i = 0 ; i<n-1 ; i++)
    {
        
    }


}

