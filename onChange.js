//Here's an example of using the onChange handler:

function CHangeItUp(){
    function handleChange(event){
        console.log(`${event.target.name}: ${event.target.value}`);
    }

    return (
        <div>
            <input 
            type="text"
            name="search"
            onChange={handleChange}
            placeholder="Enter search term..."
            />

            <select name="filter" onChange={handleChange}>
                <option value="all">Select a filter...</option>
                <option value="completed">Completed</option>
                <option value="imcomplete">Incomplete</option>
            </select>
        </div>
    )
}