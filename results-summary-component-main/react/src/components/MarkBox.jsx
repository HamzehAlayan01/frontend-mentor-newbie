import classes from "./MarkBox.module.css";

function MarkBox({icon, category, score}){
    return(
        <>
            <div className={`${classes.scoreInfo} ${classes[category]}`}>
                <div className={classes.iconAndCat}>
                    <img src={icon}></img>
                    <p className={`${classes[category]}`}>{category}</p>
                </div>
                <p>{score}<span> / 100</span></p>
            </div>
        </>
    )
}

export default MarkBox;