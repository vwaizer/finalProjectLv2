import React, { useContext, useState } from 'react';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import { Typography, Flex, Card } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import { CiTrash } from 'react-icons/ci';
import { BsFillReplyFill } from 'react-icons/bs';
import { DataContext } from '../App';
const { Text } = Typography;

const ProductImage = styled.img`
  width: 90px;
  height: 80px;
`;

const BlockNumber = styled.div`
  width: 90px;
  text-align: center;
  margin: auto;
  color: black;
  margin-left: 20px;
  font-size: 13px;
`;
const Des = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  width: 200px;
  height: 40px;
  border-radius: 1.5px;
  padding-top: 20px;
  margin: auto 20px;
`;

const Amount = styled.div`
  width: 30px;
  text-align: center;
  height: 23.5px;
`;

const NamePage = styled.p`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;
const BuyButton = styled.button`
  width: 250px;
  height: 45px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
`;
const AmountButton = styled.button`

  width: 25px;
  height: 25px;
  background-color: white;
  border: none;
  cursor: pointer;
`;
const ContinueShopping = styled.a`
  padding: 6px 0px;
  text-decoration: none;
  display: inline-block;
  border-radius: 90px;
  width: 200px;
  height: 35px;
  background-color: black;
  color: white;
  border: none;
  transition: background-color 0.4s linear;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;
const Cart = (props) => {
  const cartData = useContext(DataContext);
  // console.log(props.data)
  const suggestedItem = [];
  for (let i = 0; i < 3; i++) {
    suggestedItem.push(props.data[Math.floor(Math.random() * props.data.length)]);
  }
  // console.log(suggestedItem)
  //   console.log(cartData.data);
  const [urlParam, setUrlParam] = useSearchParams();
  const itemID = urlParam.get('id');
  const dataBase = cartData.data;
  const [cart, setCart] = useState(dataBase);
  const updateCart = [...cart];

  // tăng số lượng sản phẩm
  const increaseQuantity = (item) => {
    // console.log(item)
    const indexItem = cart.indexOf(item);
    updateCart[indexItem].amount++;
    setCart([...updateCart]);
  };
  // giảm số lượng sản phẩm
  const decreaseQuantity = (item) => {
    const indexItem = cart.indexOf(item);
    if (updateCart[indexItem].amount !== 1) {
      updateCart[indexItem].amount--;
    } else {
      updateCart[indexItem].amount = 1;
    }
    setCart([...updateCart]);
  };
  //  console.log(cart)

  // tính tổng tiền
  const toTalProduct = () => {
    const sum = cart.reduce((total, item) => total + item.price * item.amount, 0);
    return sum;
  };
  const toTalAmount = () => {
    const sum = cart.reduce((total, item) => total + item.amount, 0);
    return sum;
  };

  return (
    <Layout>
      {/* nav */}
      {cart.length > 0 ? (
        <Flex wrap="wrap" justify="space-evenly">
          <div>
            <NamePage>GIỎ HÀNG CỦA BẠN</NamePage>

            {cart.map((item) => {
              const { id, images, title, price, amount } = item;
              return (
                <div>
                  <Flex
                    wrap="wrap"
                    justify="space-evenly"
                    key={id}
                    style={{ marginBottom: '17px', backgroundColor: 'white', color: 'black' }}
                  >
                    <ProductImage src={images} alt="" />
                    <div style={{ display: 'flex' }}>
                      <Des>{title}</Des>

                      {/* <Flex justify='space-around'> */}

                      <Flex align="center">
                        <div style={{ border: '1px solid grey', display: 'flex' }}>
                          <AmountButton
                            onClick={() => decreaseQuantity(item)}
                            style={{ borderRight: '1px solid grey' }}
                          >
                            -
                          </AmountButton>
                          <Amount>{amount}</Amount>
                          <AmountButton
                            onClick={() => increaseQuantity(item)}
                            style={{ borderLeft: '1px solid grey' }}
                          >
                            +
                          </AmountButton>
                        </div>
                      </Flex>
                    </div>
                    <Flex>
                      <BlockNumber>
                        <Text>{price}₫</Text>
                      </BlockNumber>

                      <BlockNumber>
                        <div>
                          <Text type="secondary">Thành tiền</Text>
                        </div>
                        <span style={{ color: '#a73340', fontWeight: 'bold' }}>
                          {amount * price}₫
                        </span>
                        <div>
                          <CiTrash style={{ cursor: 'pointer' }}></CiTrash>
                        </div>
                      </BlockNumber>
                    </Flex>

                    {/* </Flex> */}
                  </Flex>
                </div>
              );
            })}
          </div>

          <div style={{ backgroundColor: 'white', color: 'black' }}>
            <p
              style={{
                fontSize: '15px',
                fontWeight: '550',
                fontFamily: 'Arial, Helvetica, sans-serif',
              }}
            >
              Thông tin đơn hàng
            </p>
            <Flex justify="space-between">
              <div>
                <b>Tổng tiền ({toTalAmount()}):</b>
              </div>
              <div>
                <b>{toTalProduct()}₫</b>
              </div>
            </Flex>
            <BuyButton>THANH TOÁN</BuyButton>
          </div>
        </Flex>
      ) : (
        <Flex wrap="wrap" justify="space-evenly">
          <div style={{ flex: 0.7 }}>
            <NamePage>GIỎ HÀNG CỦA BẠN</NamePage>
            <p style={{ textAlign: 'center', fontWeight: 'lighter' }}>
              Giỏ hàng của bạn đang trống
            </p>
            <div style={{ textAlign: 'center' }}>
              <ContinueShopping href="/Product">
                <BsFillReplyFill /> TIẾP TỤC MUA HÀNG
              </ContinueShopping>
            </div>
            <div>
              <Flex justify="space-between">
                <div>
                  <p>CÓ THỂ BẠN SẼ THÍCH</p>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <a>See More</a>
                </div>
              </Flex>
              <Flex style={{ marginBottom: '10px' }} wrap="wrap">
                {suggestedItem.map((item) => {
                  const { id, images, title, price } = item;
                  return (
                    <Card hoverable key={id} style={{ width: '260px' }}>
                      <img src={images} style={{ width: '210px', height: '180px' }}></img>
                      <Flex justify="space-between">
                        <div>{title}</div>
                        <div>${price}</div>
                      </Flex>
                      <p style={{ textAlign: 'center' }}>About Product</p>
                    </Card>
                  );
                })}
              </Flex>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', color: 'black' }}>
            <p
              style={{
                fontSize: '15px',
                fontWeight: '550',
                fontFamily: 'Arial, Helvetica, sans-serif',
              }}
            >
              Thông tin đơn hàng
            </p>
            <Flex justify="space-between">
              <div>
                <b>Tổng tiền ({toTalAmount()}):</b>
              </div>
              <div>
                <b>{toTalProduct()}₫</b>
              </div>
            </Flex>
            <BuyButton>THANH TOÁN</BuyButton>
          </div>
        </Flex>
      )}
    </Layout>
  );
};
export default Cart;