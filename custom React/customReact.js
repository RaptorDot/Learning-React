    
    function customRander(reactElements , container){

        //    const domElement = document.createElement(reactElements.type)
        //     domElement.innerHTML = reactElements.children;
        //     domElement.setAttribute('href' , reactElements.props.href)
            
            const domElement = document.createElement(reactElements.type);
            domElement.innerHTML = reactElements.children;
            for(const prop in reactElements.props){
                if(prop==='children'){
                    continue ;
                }
                domElement.setAttribute(prop , reactElements.props[prop]);
            }
            
    }
            


    

const reactElements = {
    type: 'a',
    props:{
        href: "https://rb.gy/zmiiav",
        target: '_blank',
    },
    children: 'click me to visit yt channle'
}

const mainContainer = document.querySelector("#root");
customRander(reactElements , container);