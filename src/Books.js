import React, { Component } from 'react';
import Data from "./product"

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeBooksActual: Data,
            storeBooksFiltered: Data
        };
    }

    selectFilter = (e) => {
        if (e.target.value == "business") {
            let filteredData = this.state.storeBooksActual.filter(book => book.category == "business");
            this.setState({ storeBooksFiltered: filteredData });
        }
        if (e.target.value == "cookbooks") {
            let filteredData = this.state.storeBooksActual.filter(book => book.category == "cookbooks");
            this.setState({ storeBooksFiltered: filteredData });
        }
        if (e.target.value == "all") {
            this.setState({ storeBooksFiltered: this.state.storeBooksActual });
        }
        if (e.target.value == "mystery") {
            let filteredData = this.state.storeBooksActual.filter(book => book.category == "mystery");
            this.setState({ storeBooksFiltered: filteredData });
        }
        if (e.target.value == "scifi") {
            let filteredData = this.state.storeBooksActual.filter(book => book.category == "scifi");
            this.setState({ storeBooksFiltered: filteredData });
        }
        if (e.target.value == "accessories") {
            let filteredData = this.state.storeBooksActual.filter(book => book.category == "accessories");
            this.setState({ storeBooksFiltered: filteredData });
        }

    }

    selectChange = (e) => {

        if (e.target.value == "name") {
            let nameFilter = this.state.storeBooksActual.sort(function (a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            this.setState({
                storeBooksFiltered: nameFilter
            });
        }
        if (e.target.value == "sortpriceHL") {
            let priceFilter = this.state.storeBooksActual.sort(function (a, b) {
                if (a.price > b.price) return -1;
                if (a.price < b.price) return 1;
                return 0;
            });
            this.setState({
                storeBooksFiltered: priceFilter
            });
        }
        if (e.target.value == "sortpriceLH") {
            let priceFilter = this.state.storeBooksActual.sort(function (a, b) {
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                return 0;
            });
            this.setState({
                storeBooksFiltered: priceFilter
            });
        }

    }

    searchBox = (e) =>{
       var strval = (e.target.value).toLowerCase();
       console.log(strval);
        let filteredData = this.state.storeBooksActual.filter(book => ((book.name).toLowerCase()).includes(strval));
        this.setState({storeBooksFiltered : filteredData});
    }
    render() {
        var imgStyle = {
            height: "250px",
            width: "250px"
        };
        return (
            <div>
                <div> <h1>The Book Shop </h1></div>
                <br/><br/>
                <div >
                    <p>Filter by Categories</p>

                    <input type="radio" id="all" name="fav_language" value="all" onClick={this.selectFilter} />
                    <label for="html">All</label> &nbsp;

                    <input type="radio" id="business" name="fav_language" value="business" onClick={this.selectFilter} />
                    <label for="css">Business</label>&nbsp;

                    <input type="radio" id="cookbooks" name="fav_language" value="cookbooks" onClick={this.selectFilter} />
                    <label for="javascript">CookBooks</label>&nbsp;

                    <input type="radio" id="mystery" name="fav_language" value="mystery" onClick={this.selectFilter} />
                    <label for="javascript">Mystery</label>&nbsp;

                    <input type="radio" id="scifi" name="fav_language" value="scifi" onClick={this.selectFilter} />
                    <label for="javascript">Scifi</label>&nbsp;

                    <input type="radio" id="accessories" name="fav_language" value="accessories" onClick={this.selectFilter} />
                    <label for="javascript">Accessories</label>&nbsp;
                </div>
                <br /><br /><br />
                <div >
                    <label for="cars">SORT BY:</label>
                    <select name="books" id="books" onChange={this.selectChange}>
                        <option value="select an option">--- Select an optoin---</option>
                        <option value="name">Select by name</option>
                        <option value="sortpriceHL">Sort by price : High to Low</option>
                        <option value="sortpriceLH">Sort by price Low to High</option>
                    </select>
                </div>

                <br /><br />

                <div class="topnav">

                    <input type="text" placeholder="Search.."  onChange={this.searchBox}/>
                </div>

                <div>
                    {this.state.storeBooksFiltered.map(book => {
                        return (
                            <div key={book.id} style={{ display: "inline-block", padding: "10px" }}>
                                <div>
                                    <img style={imgStyle} src={book.img} alt={book.name} />
                                </div>
                                <div style={{backgroundColor:"#f3f3f3"}}>
                                <div style={{ display: "block" }}><b>{book.category}</b></div>
                                    <div style={{ display: "block" , textAlign:"left"}}>{book.name}</div>
                                    <div style={{ display: "block", textAlign:"left" }}>{book.author}</div>
                                    <div style={{ display: "block" , textAlign:"left"}}>{book.price}</div>
                                    <div style={{ display: "block" ,textAlign:"left" }}>ADD TO FAVOURITES</div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Books;