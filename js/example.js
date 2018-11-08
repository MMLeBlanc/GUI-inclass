// ADD NEW ITEM TO END OF LIST
// Create a variable
var listItem;
// Initialize the var as the UL tag
listItem = document.getElementsByTagName('UL')[0];
// Create a new var and make a new LI item
var newItem = document.createElement('LI');
// Create another new var and set the text of the item.
var itemName = document.createTextNode('cream');
// Append the new variables on the list.
newItem.appendChild(itemName);
listItem.appendChild(newItem);

// ADD NEW ITEM START OF LIST
// Try to do something similar as the above code
var newListItem = document.createElement('LI');
var firstElement = document.createTextNode('kale');
newListItem.appendChild(firstElement);
// Now we need to insert at beginning of the UL
listItem.insertBefore(newListItem, listItem.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var x = listItem.getElementsByTagName('LI');
for (var i = 0; i < x.length; i++) {
    x[i].classList.add('cool');
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// Have to add a span into h2, then print out the number of items.
// Second part is simple. 
var newSpan = document.createElement('SPAN');
var spanNode = document.createTextNode(x.length);
newSpan.appendChild(spanNode);
// Append to the header tag in the HTML code
var getH2 = document.getElementsByTagName('H2')[0];
getH2.appendChild(newSpan);