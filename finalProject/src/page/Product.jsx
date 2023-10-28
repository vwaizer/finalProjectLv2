import React from 'react';
import CarouselItem from '../component/CarouselItem';
import ItemContainer from '../component/ItemContainer';
import Layout from '../component/layout/Layout';
import styled from 'styled-components';
import { Image } from 'antd';
import './Product.css';
const ItemArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
  margin: 5px;
  margin-bottom: 30px;
  height: 500px;
`;
const Block1 = styled.div`
  padding-top: 100px;
`;
const Tittle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  justify-content: space-between;
  padding-top: 20px;
`;

const Product = (props) => {
  const dataBase = props.data;
  const productPage = dataBase.filter((item, index) => index < 6);
  console.log(productPage);
  return (
    <div>
      <Layout>
        <div className="section_card contain">
          <CarouselItem data={dataBase} />
          <Block1>
            <Tittle>
              <span id="collection">Latest Collection</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index < 4) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>

          <Block1>
            <Tittle>
              <span id="best">Best Seller</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 8 && index < 11) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>

          <Block1>
            <Tittle>
              <span>Sofa Products</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 11 && index < 15) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 8 && index < 12) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>

          <Block1>
            <Tittle>
              <span>Bedding products</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 8 && index < 12) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>

          <Block1>
            <Tittle>
              <span>Smart Dressing Table</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 8 && index < 12) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>

          <Block1>
            <Tittle>
              <span>Dining Table Product</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 8 && index < 12) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>

          <Block1>
            <Tittle>
              <span>Types Of Wardrobes</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 8 && index < 12) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>

          <Block1>
            <Tittle>
              <span>Shoe Cabinet</span>
              <h2>ESSENTIAL ITEMS</h2>
            </Tittle>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 4 && index < 8) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
            <ItemArea>
              {dataBase.map((item, index) => {
                if (index >= 8 && index < 12) {
                  return (
                    <ItemContainer
                      key={index}
                      title={item.title}
                      price={item.price}
                      picture={item.images[0]}
                      id={item.id}
                    />
                  );
                }
                return <></>;
              })}
            </ItemArea>
          </Block1>
        </div>
      </Layout>
    </div>
  );
};

export default Product;
