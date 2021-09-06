# Betao Web front-end interview

The periodic table is an arrangement of all known chemical elements, organized on the basis of their atomic numbers, electron configurations and recurring chemical properties. Elements are presented in order of increasing atomic number.

A row of elements across the table is called a period. Each period has a number; from 1 to 8.
A column of elements down the table is called a group. There are 18 groups in the standard periodic table. Each group has a number: from 1 to 18.

Below is an example of a periodic table.
![periodic table](https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Simple_Periodic_Table_Chart-blocks.svg/1920px-Simple_Periodic_Table_Chart-blocks.svg.png 'Logo Title Text 1')

You have been provided a list of all known elements in the file `periodic-table-data.json`. The list provides each element's row (period), column (group), name, symbol, as well as some other data such as atomic weight or block.

The task is to display a simple periodic table in the browser, using data from the provided file. The elements should be arranged by periods (rows) and groups (columns).
With this task, we are looking to evaluate a candidate's general capability in front-end development, including data consumption and rendering, coding style, choice of relevant tools for the task, attention to design and understanding of broad requirements.

### Scope:

- Each element's cell should display:
  - Symbol (e.g: `O`)
  - Atomic Number (e.g: `8`)
  - Name (e.g: `Oxygen`)
- When clicking on any element's square, it should **Highlight** (through font, coloring, opacity...) all the elements belonging to the same **block** (s, p, d, or f). The blocks are also provided in the data. When clicking on any element while a block is highlighted, it should remove the highlight on the current block and highlight another block, if the element clicked belongs to another block than the currently highlighted block.
- The design of the periodic table is entirely up to you. You can find hundreds of examples for inspiration here: https://www.google.com/search?q=periodic+table&tbm=isch

### Bonus feature:

- Some scientists are suggesting that the [periodic table would make more sense if it was turned upside down](https://www.manchester.ac.uk/discover/news/turn-the-periodic-table--upside-down-argue-scientists/).
- Add a button on the page labeled "Invert" that, when clicked, inverts the table, putting heavier elements at the top and the lightest elements at the bottom. If the button is clicked again, it should put the table back into its regular order. Example of an inverted periodic table: https://d2cbg94ubxgsnp.cloudfront.net/Pictures/780xany/1/9/2/142192_Notts_periodic_with_title_centred.jpg.

### Guidelines & Limitations:

- We do not expect the periodic table to be responsive on mobile, but it should render properly on all desktop screens down to `1024x768`.
- The table can be built using any programming language, library or framework that you consider relevant for the task. The only requirement is that the resulting application runs in any evergreen browser (Firefox, Chrome...). If the project needs additional libraries or compilation steps, it should contain a `package.json` file compatible with npm or yarn, with a clear build step.
- There should be not backend built for this assignment.
- In order to submit your work, please email your compressed project at `solen@betao.se`
- If you are time-constrained, any work-in-progress project can still be submitted and we will take it into account.
- If you have any questions or concerns, please send a message to Solen (solen@betao.se) or call him at `+46736270944`
- The code submitted as part of this application is not to be used by Betao AB for any purposes besides review, and it belongs fully to the candidate. Its only use by the company will be to assess the candidate's skills.
