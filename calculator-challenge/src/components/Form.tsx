
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

const Form = ({ bill, setBill, setTip, people, setPeople} : any) => {
    const handleSelectedTip = (e : any) => {
        setTip(+e.target.value);
    }

  return (
    <div className="form">
        <div className="label-group">
            <div className="label-wrapper">
                <label className="label" htmlFor="bill">Bill</label>
                
            </div>
            
            <div className="number-wrapper">
                <input type="number" id="bill" className="number-input" onInput={(e:any) => setBill(+e.target.value)} value={bill}/>
                <img src={dollarIcon} aria-hidden="true" className="icon" />
            </div>
        </div>

        <div className="tip-section">
            <p className="label">Selected Tip</p>

            <div className="tip-amount-wrapper">

                <div className="tip-amount">
                    <input type="radio" className="tip-input"  onInput={handleSelectedTip} name="tip"  id="input1" value="5" />
                    <label className="tip-btn" htmlFor="input1">5%</label>
                </div>

                <div className="tip-amount">
                    <input type="radio" className="tip-input"  onInput={handleSelectedTip} name="tip"  id="input2" value="10" />
                    <label className="tip-btn" htmlFor="input2">10%</label>
                </div>

                <div className="tip-amount">
                    <input type="radio" className="tip-input"  onInput={handleSelectedTip} name="tip"  id="input3" value="15" />
                    <label className="tip-btn" htmlFor="input3">15%</label>
                </div>
                
                <div className="tip-amount">
                    <input type="radio" className="tip-input" onInput={handleSelectedTip}  name="tip" id="input4" value="25" />
                    <label className="tip-btn" htmlFor="input4">25%</label>
                </div>
                
                <div className="tip-amount">
                    <input type="radio" className="tip-input" onInput={handleSelectedTip} name="tip" id="input5"  value="50" />
                    <label className="tip-btn" htmlFor="input5">50%</label>
                </div>
                <div className="custom-wrapper">
                    <input type="number" onInput={handleSelectedTip} className="tip-custom number-input" placeholder="Custom" id="custom" />
                    <label htmlFor="custom" className="tip-custom-label">Custom</label>
                </div>
                
                
            </div>
        </div>

        <div className="label-group">
            <div className="label-wrapper">
                <label className="label" htmlFor="people">Number of People</label>
                <p className="error">{people === 0 ? "Can't Be Zero" : ""}</p>
            </div>
            
            <div className="number-wrapper">
                <input type="number" className={`number-input ${people === 0 ? 'error' : ""}`}  id="people" onInput={(e : any) => setPeople(+e.target.value)} value={people}/>
                <img src={personIcon} aria-hidden="true" className="icon" />
            </div>
            
        </div>
    </div>
  )
}

export default Form
