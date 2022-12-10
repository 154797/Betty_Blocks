const Info = () => {

    const handleClick = () => {
    alert('Schrijf je hier in om deel te nemen aan de workshop programmeren! Verdere informatie volg via de mail😎');
    }


    return (    
            <button className="infoButton" onClick={handleClick}>Klik hier voor informatie.</button>
    );
}
 
export default Info;