figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type ==="actionGenerate"){

function generateHTMLCSS() {
  const nodes = figma.currentPage.selection;
  if (nodes.length !== 1 || nodes[0].type !== "FRAME") {
    figma.ui.postMessage({ error: "Please select a single Frame." });
    return;
    }

    const Frame = nodes[0] as FrameNode;
    const layers = Frame.children;
    const color = nodes[0].fills.toLocaleString
    const css = `
      .frame {
        position: relative;
        width: ${Frame.width}px;
        height: ${Frame.height}px;
      }
    `;
    let html = `<div class="frame">`;

    for (const layer of layers) {
      const { x, y, width, height } = layer;
      const position = `top: ${y}px; left: ${x}px;`;
      const style= `position: absolute; width: ${width}px; height: ${height}px; ${position}`;
  
      if (layer.type === "RECTANGLE") {
        const { fillStyleId , strokeGeometry, strokeStyleId} = layer;
        const backgroundColor = fillStyleId.toString;
        const borderColor = strokeStyleId.color;
        const borderWidth = strokeGeometry.values;
  
        html += `<div style="${style} background-color: ${backgroundColor}; border: ${borderWidth}px solid ${borderColor};"></div>`;
      }
       else if (layer.type === "TEXT") {
        const { characters, fontName, fontSize, lineHeight  } = layer;
  
        html += `<div style="${style} font-family: ${fontName.family}; font-size: ${fontSize}px; line-height: ${lineHeight}px;">${characters}</div>`;
      }
    }
  
    html += `</div>`;
}
}
}