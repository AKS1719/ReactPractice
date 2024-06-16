const reactElement = {
    type:'a', // tagname
    props:{
        href:"https://google.com",
        target:'_blank'
    }
       //properties
       ,
    childern:'Click me to visit google'
}

const mainContainer = document.getElementById("root")

function customRender(ele,container){
    // const domEle = document.createElement(ele.type)
    // domEle.innerHTML = reactElement.childern
    // // domEle.setAttribute('href',ele.props.href)
    // // domEle.setAttribute('target',ele.props.target) 
    // // if more than one attribute was there then this won't be good react always do loops based
    // container.appendChild(domEle)

    // react do this

    const domEle = document.createElement(ele.type)
    domEle.innerHTML = ele.childern
    for(const prop in ele.props){
        if(prop === 'childern')continue
        domEle.setAttribute(prop,ele.props[prop])
    }
    container.appendChild(domEle)
}


customRender(reactElement,mainContainer)