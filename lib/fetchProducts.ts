import { DOMParser } from "xmldom";
import { createUrlProduct, deleteUrlProducts } from "./actions/product.actions";
import { getProducts } from "@/app/api/getProducts/route";

export default async function xmlParse(xmlString: string){

    if(!xmlString){
        console.log("No XML data found");

        return [];
    }
    
    const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
    const products = xmlDocument.getElementsByTagName("offer");
    if(!products){
        return[];
    }
    const fetchedProducts = [];

    if(products) {
        // await deleteUrlProducts();

        for(let i = 0; i < products.length; i++){
            const product = products[i];
            let id = product.getAttribute("id");
            const isAvailableAttribute = product.getAttribute("available");
            const quantityElement = product.getElementsByTagName("stock_quantity")[0];
            const urlElement = product.getElementsByTagName("url")[0];
            const priceToShowElement = product.getElementsByTagName("price")[0];
            const priceElement = product.getElementsByTagName("price_old")[0];
            const categoryIdElement = product.getElementsByTagName("categoryId")[0];
            const imagesElements = product.getElementsByTagName("picture");
            const vendorElement = product.getElementsByTagName("vendor")[0];
            let nameElement = product.getElementsByTagName("name_ua")[0];

            if(!nameElement){
                nameElement = product.getElementsByTagName("name")[0];
            }

            let descriptionElement = product.getElementsByTagName("description_ua")[0];

            if(!descriptionElement){
                descriptionElement = product.getElementsByTagName("description")[0];
            }
            
            const paramElements = product.getElementsByTagName("param");
            const images = [];
            const params = [];
        
            let isAvailable;
            if(isAvailableAttribute === "true"){
                isAvailable = true;
            } else {
                isAvailable = false;
            }
            const quantity = quantityElement ? parseFloat(quantityElement.textContent || '0') : 0;
            const url = urlElement ? urlElement.textContent : "";
            const priceToShow = priceToShowElement ? parseFloat(priceToShowElement.textContent || '0') : 0;
            let price = priceElement ? parseFloat(priceElement.textContent || '0') : 0;
            if (price === 0 || price === null) {
                price = priceToShow;
              }
            const categoryId = categoryIdElement ? categoryIdElement.textContent : "";
            const vendor = vendorElement ? vendorElement.textContent : "";
            const name = nameElement ? nameElement.textContent : "";
            const description = descriptionElement ? descriptionElement.textContent : "";
            
            for (let i = 0; i < imagesElements.length; i++) {
                const image = imagesElements[i].textContent;
    
                images.push(image)
            }
        
            for (let i = 0; i < paramElements.length; i++) {
                const paramName = paramElements[i].getAttribute("name");
                const paramValue = paramElements[i].textContent;
            
                params.push({ name: paramName, value: paramValue });
            }
            const isFetched = true;

            const fetchedProduct = {
                id: id,
                name: name,
                isAvailable: isAvailable,
                quantity: quantity,
                url: url,
                priceToShow: priceToShow,
                price: price,
                images: images,
                vendor: vendor,
                description: description,
                params: params,
                isFetched: isFetched
            };

            console.log(fetchedProduct);

            fetchedProducts.push(fetchedProduct);

        }
            // await createUrlProduct({ id: id, name: name, isAvailable: isAvailable, quantity: quantity, url: url, priceToShow: priceToShow, price: price, images: images, vendor: vendor, description: description, params: params, isFetched: isFetched })
    }
    return(fetchedProducts);
}




