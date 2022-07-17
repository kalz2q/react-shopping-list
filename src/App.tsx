import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [totalItemCount, setTotalItemCount] = useState(0);
  
	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			// console.log(total)
			return total + item.quantity;
		}, 0);
		setTotalItemCount(totalItemCount);
	};
	const handleAddButtonClick = () => {
		//作られるitemの定義
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};
  	const newItems = [...items, newItem];
		setItems(newItems);

		setInputValue("");
		console.log(items);
		calculateTotal();
		console.log(items);
	};
	//done切り替え
	const toggleComplete = (index) => {
		//itemsを展開した配列、newItemsを作る
		const newItems = [...items];
		//引数にindexから、該当するitemのisSelectedを切り替える
		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const handleQuantityDecrease = (index) => {
		//itemsを展開した配列、newItemsを作る
		const newItems = [...items];
		//quantityに-1する
		newItems[index].quantity--;
		setItems(newItems);
		//総量更新
		calculateTotal();
	};

	const handleQuantityIncrease = (index) => {
		//itemsを展開した配列、newItemsを作る
		const newItems = [...items];
		//quantityに+1する
		newItems[index].quantity++;
		setItems(newItems);
		//総量更新
		calculateTotal();
	};

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input className="add-item-input" placeholder="Add an item..." />
          <FontAwesomeIcon icon={faPlus} />
        </div>

        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name">
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="total">Total: </div>
      </div>
    </div>
  );
}

export default App;
