$(document)
    .ready(function () {

        const todoForm = {
            tdoos: [],
            statusOfList: "all"
        }

        function filterByStatus(tdoos,status) {
            const filterExecuters = {
                all() {
                    
                }
            }
        }


        let todoList = `<div>
                            <input class="input-text" type="text" name="ListItem" data-com.agilebits.onepassword.user-edited="yes">
                            <div id="button" onclick = "addItem()">Add</div>
                        </div>
                        <br>
                        <ol>${filterByStatus(todoForm.todos,todoForm.statusOfList).map(todoViewItem).join("")}</ol>
                        <div>
                            <ul id="filters">
                                <li>
                                    <a href="#" data-filter="all" class="${todoForm.statusOfList == "all" ? "selected" : ""}">ALL</a>
                                </li>
                                <li>
                                    <a href="#" data-filter="active" class="${todoForm.statusOfList == "active" ? "selected" : ""}">Active</a>
                                </li>
                                <li>
                                    <a href="#" data-filter="complete" class="${todoForm.statusOfList == "complete" ? "selected" : ""}">Complete</a>
                                </li>
                            </ul>
                        </div>`

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
    });