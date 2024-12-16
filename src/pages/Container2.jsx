import { useState } from 'react';
import './Container2.css';

export default function Container2() {

    const [images, setImages] = useState([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5PY5GLtZXM5wFybH2Fosb0DE3jyrjQauoQ&s',
        'https://www.arakucoffee.in/cdn/shop/files/ARAKU_Latte_Mug_Mood.jpg?v=1687414870&width=2048',
        'https://www.1mg.com/articles/wp-content/uploads/2024/01/hot-drink-cup-tea-tea-drink-nutritional.jpg',
        'https://bpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/f/8693/files/2019/04/iStock-juice-830x337.jpg'
    ])


    return (
        <>
            <div className="menu">
                <h2>Menu</h2>
                <div className="container2">
                    {
                        images.map((item, index) => {
                            return (
                                <div className='card'>
                                    <img src={item}></img>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}