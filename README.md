# DSA Projects

## Repository Overview

This repository contains a collection of Data Structures and Algorithms (DSA) projects. Each project is designed to illustrate key concepts in DSA through interactive and visual demonstrations. The current projects include:

1. Visual Sorting Algorithms

More projects will be added over time to cover various aspects of DSA.

## Projects

### 1. Visual Sorting Algorithms

This project visualizes five different sorting algorithms: Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, and Quick Sort. The visualization displays vertical bars of varying heights (proportional to the values in the arrays being sorted) within separate DOM elements for each algorithm. Upon clicking a button, all five sorting algorithms run simultaneously on five different sets of number arrays. The DOM arrangements of the vertical bars dynamically change to illustrate the sorting process in real-time. The project also measures and displays the time taken by each algorithm to complete the sorting.

#### Features

- **Simultaneous Visualization:** Runs and visualizes five sorting algorithms at the same time.
- **Dynamic Bar Representation:** Uses vertical bars with heights corresponding to array values.
- **Performance Measurement:** Calculates and displays the time taken by each algorithm to sort the arrays.
- **User Interaction:** Initiate sorting through a button click.

#### Setup and Usage

##### Prerequisites

- Web browser (preferably Chrome or Firefox)

##### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/dsa-projects.git
    cd dsa-projects
    ```

2. Navigate to the Visual Sorting project directory:

    ```sh
    cd visual-sorting
    ```

3. Open `index.html` in your web browser:

    ```sh
    open index.html
    ```

##### Running the Visualization

1. Open `index.html` in your preferred web browser.
2. Click the "Start Sorting" button to begin the visualization.
3. Observe the sorting process for each algorithm in their respective sections.
4. The time taken by each algorithm to complete the sorting will be displayed at the end.


#### Customization

- **Array Size and Values:** Modify the array size from 'scripts.js' by passing an appropriate value to 'generateNums' and 'generateColors' functions. (right now it is set to 10).
- **Visualization Speed:** Adjust the speed of the visualization by modifying time in 'await sleep()' function called in scripts.js file. (Current value is 250)
- **Styles:** Customize the appearance of the bars and layout by editing the `styles.css` file.

### Future Projects

Additional DSA projects will be added here. Each project will come with detailed documentation on setup, usage, and the concepts it illustrates.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.



## Acknowledgements

- [Prince Verma](https://github.com/vermaprince123) - Creator and maintainer

---

Feel free to reach out with any questions or suggestions. Happy coding!

---

