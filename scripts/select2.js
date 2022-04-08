function selectoption()
{
    return` <select id="sortby" onchange="sortbyprice()">
    <option>Sort by</option>
    <option value="defaul">Default</option>
    <option value="low">Price:Low to high</option>
    <option value="high">Price: High to Low</option>
    <option>Newest Arrivals</option>
    <option>Percentage Discount</option>
    <option></option>
</select>


<input type="text" placeholder="Brand" id="searchbybrand">

<select id="byskinopt">
    <option >Skincare Product Type</option>
    <option>Moisturizer</option>
    <option>Serums</option>
    <option>Clensers</option>
    <option>Masks</option>
    <option></option>
</select>

<select id="skin">
        <option>Skincare Format</option>
        <option>Cream</option>
        <option>Fluid</option>
        <option>Sheet</option>
        <option>Clay</option>
        <option>Get</option>
        <option>Setum</option>
        <option></option>

</select>


<select>
    <option>Skincare Tools</option>
    <option>Face Cloths and Flannels</option>
    <option>Cotton Pads</option>
    <option>Face brushes</option>
    <option>Wipes</option>
    <option>Blemish Control Tools</option>
</select>

<select id="skinid3" >
    <option>Skin Type</option>
    <option>Combination</option>
    <option>Dehydrated</option>
    <option>Dry</option>
    <option>Mature</option>
    <option>Normal</option>
    <option>Oily</option>
</select>
`;
}

// export default select;
export default selectoption;
// C:\Users\manoj\Desktop\skinproduct\manojkumar\