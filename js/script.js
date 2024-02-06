function removeAll() {
    graph.dispose();
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);                
}
function removeRandomPoint() {
    if (graph.points.length == 0) {
        console.log("no points");
        return;
    }
    const index = Math.floor(Math.random() * graph.points.length);
    graph.removePoint(graph.points[index]);
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
}

function removeRandomSegment() {
    if (graph.segments.length == 0) {
        console.log("no segments");
        return;
    }
    const index = Math.floor(Math.random() * graph.segments.length);
    graph.removeSegment(graph.segments[index]);
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
}
function addRandomSegment() {
    const index1 = Math.floor(Math.random() * graph.points.length);
    const index2 = Math.floor(Math.random() * graph.points.length);
    const success = graph.tryAddSegment(
            new Segment(graph.points[index1], graph.points[index2])
        );
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
    console.log(success);
}
function addRandomPoint() {
    const success = graph.tryAddPoint(
        new Point(
            Math.random() * myCanvas.width,
            Math.random() * myCanvas.height
        )
    );
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
    console.log(success);
}

function exampleGraph(){
    const p1 = new Point(200, 200);
    const p2 = new Point(500, 200);
    const p3 = new Point(400, 400);
    const p4 = new Point(100, 300);

    const s1 = new Segment(p1, p2);
    const s2 = new Segment(p1, p3);
    const s3 = new Segment(p1, p4);
    const s4 = new Segment(p2, p3);
    

    return new Graph([p1, p2, p3, p4], [s1, s2, s3, s4]);
}

const controlButtons = document.querySelectorAll("#hiddencontrols button");
console.log(controlButtons);
controlButtons.forEach(e => e.classList.add("hide"));