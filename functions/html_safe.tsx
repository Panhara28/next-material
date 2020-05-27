import { ReactNode } from "react"

export function renderImg(params, idx) {
  let withBorder = params.data.withBorder ? "image-with-border":"";
  let withStretched = params.data.withStretched ? "image-with-stretched":"";
  let withBackground = params.data.withBackground ? "image-with-background":""
  let caption = params.data.caption ? "caption":"no-caption"
  let addMarginBottom = params.data.caption ? "caption":"mb-40"
  let addBorder = params.data.withBorder ? "add-border-image":""
  return (
    <>
      <div key={idx} className={`${addMarginBottom} ${withBorder} ${withStretched} ${withBackground}`}>
        <img className={`${caption} ${addBorder}`} src={params.data.file.url} alt={params.data.file.url} />
        <div className={ params.data.caption ? "bottom-left":"" } dangerouslySetInnerHTML={{ __html: params.data.caption }}></div>
      </div>
    </>
  )
}

export function renderTitle(params, idx){
  if (params.data.level == 1) {
    return <h1 className="mb-15"  key={idx} dangerouslySetInnerHTML={{ __html: params.data.text }}></h1>
  }else if(params.data.level == 2){
    return <h2 className="mb-15"  key={idx} dangerouslySetInnerHTML={{ __html: params.data.text }}></h2>
  }else if(params.data.level == 3){
    return <h3 className="mb-15"  key={idx} dangerouslySetInnerHTML={{ __html: params.data.text }}></h3>
  }else if(params.data.level == 4){    
    return <h4 className="mb-15"  key={idx} dangerouslySetInnerHTML={{ __html: params.data.text }}></h4>
  }else if(params.data.level == 5){
    return <h5 className="mb-15"  key={idx} dangerouslySetInnerHTML={{ __html: params.data.text }}></h5>
  }else if(params.data.level == 6){
    return <h6 className="mb-15"  key={idx} dangerouslySetInnerHTML={{ __html: params.data.text }}></h6>
  }

}

export function renderPara(params, idx) {
  
  return (
    <>
      <div key={params.data.text} id="paragraphBlock">
        <p style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: params.data.text }}></p>
      </div>
    </>
  )
}

export function renderList(params,idx) {
  const list = params.data;
  let parentListNode: ReactNode;
  let listNode: ReactNode[] = [];
  listNode = list.items.map((item, inx) => (
    <li key={inx} dangerouslySetInnerHTML={{ __html: item }}></li>
  ));

  if(list.style === "ordered") {
    parentListNode = 
    <ol className="orderedlist"> 
      { listNode } 
    </ol>;
  } else {
    parentListNode = 
    <ul className="unorderedlist"> 
      { listNode } 
    </ul>;
  }
  
  return parentListNode;
}


export function renderTextBlock(params, idx){
  return (
    <div key={ idx }>
      <aside key={params.data.content} dangerouslySetInnerHTML={{ __html: params.data.content }}></aside>
    </div>
  )

}

export function renderQuote(params, idx){
  return (
    <div className="quote" key={idx}>
      <aside dangerouslySetInnerHTML={{ __html: params.data.text }}></aside>
      <p className="caption-right"  dangerouslySetInnerHTML={{ __html: params.data.caption }}></p>
    </div>  
  )
}

export function renderSource(params, idx){  
  return (
    <>
      <div className="according-from" style={{ fontSize: "1.7rem" }}> 
        <b>ប្រភព​​​៖ &#8203;&#8203;&#8203;</b>
        <a className="according-link" style={{ textDecoration: "underline", cursor: "pointer", }}  target="_blank" href={params.data.sourceLink}>{params.data.sourceName}</a>
      </div>     
    </>
  )
}

export function renderCodePen(params, idx) {
  return(
    <div>
      <p className="code code-wrapper">{params.data.code}</p>
    </div>
  )
}