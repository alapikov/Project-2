import React from "react";
import Addtocart from "../buttons/Addtocart";

function ProductCard(props) {
    return (
        <div className="ProductCardCont">
            <div className="ProductImgCont">
                <img className="ProductImg" src={props.imgSrc} alt="" />
                <div className="ProductImgArrowsCont">
                    <img className="ProductImgArrow" src="images/arrow1Left.png" alt="" />
                    <img className="ProductImgArrow" src="images/arrow1Right.png" alt="" />
                </div>
            </div>

            <div className="ProductInfoCont">
                <div className="ProductInfoName">{props.name}</div>
                <div className="ProductInfoType">{props.type}</div>
                <div className="ProductInfoFeaturesCont">
                    <div className="ProductFeaturesPropCont">
                        <div className="ProductProp1">{props.feature1Key}</div>
                        
                        <div className="ProductProp2">{props.feature2Key}</div>
                        
                        <div className="ProductProp3">{props.feature3Key}</div>
                        
                        <div className="ProductProp4">{props.feature4Key}</div>
                        
                        <div className="ProductProp5">{props.feature5Key}</div>
                        
                        <div className="ProductProp6">{props.feature6Key}</div>
                    </div>
                    <div className="ProductFeaturesInfoCont">
                        <div className="ProductInfo1">{props.feature1Value}</div>
                        
                        <div className="ProductInfo2">{props.feature2Value}</div>
                        
                        <div className="ProductInfo3">{props.feature3Value}</div>
                        
                        <div className="ProductInfo4">{props.feature4Value}</div>
                        
                        <div className="ProductInfo5">{props.feature5Value}</div>
                        
                        <div className="ProductInfo6">{props.feature6Value}</div>
                    </div>
                    
                </div>
            </div>

            <div className="ProductPriceCont">
                <div className="ProductPriceIconsRow">
                    <img className="ProductPriceIcon" src="images/iconLike1.png" alt="" />
                    <img className="ProductPriceIcon" src="images/iconCompare1.png" alt="" />
                </div>
                <div className="bonuspoints">bonus points</div>
                <div className="ProductPriceBonuses">+ {props.bonusPts} pts</div>
                <div className="yourprice">your price</div>
                <div className="ProductPrice">{props.price} $</div>
                <Addtocart name={'Add to Cart'} style={{width: '160px', height: '50px'}} />
            </div>


        </div>
    );
}

export default ProductCard;