import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from '../CardData';
import '../../components/style.css'
import { useDispatch } from 'react-redux';
import { addToItem } from '../../redux/actions/ActionCreators';

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch()

  const onclickAddItem = (item) => {
    dispatch(addToItem(item))
  }


  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to cart Items</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((item) => {
            return (
              <>
                <Card style={{ width: '24rem', border: 'none' }} className="mx-2 mt-4 card_style" key={item.id}>
                  <Card.Img className='mt-3' variant="top" src={item.imgdata} style={{ height: '16rem' }} />
                  <Card.Body>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>
                      Price: ₹ {item.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button variant="primary" className='col-lg-6' onClick={() => onclickAddItem(item)}>Add to cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards