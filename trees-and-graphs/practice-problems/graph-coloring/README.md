# Graph coloring
## Question:
Given an undirected graph ↴ with maximum degree ↴ DD, find a graph coloring ↴ using at most D+1D+1 colors.

Graphs are represented by an array of _N_ node objects, each with a label, a set of neighbors, and a color:
```javascript
class GraphNode {
  constructor(label) {
    this.label = label
    this.neighbors = new Set()
    this.color = null
  }
}

const a = new GraphNode('a')
const b = new GraphNode('b')
const c = new GraphNode('c')

a.neighbors.add(b)
b.neighbors.add(a)
c.neighbors.add(b)
b.neighbors.add(c)

const graph = [a, b, c]
```

#### graph coloring
*Graph coloring* is when you assign colors to the nodes in a graph.

A *legal coloring* means no adjacent nodes have the same color.

The color could be used literally. Say we're coloring a map. We'll want to color adjacent states or countries differently so their borders are clear.

The color could also represent some concept or property. For example, say we have a graph where nodes represent university classes and edges connect classes with overlapping students. We could use colors to represent the scheduled class exam time. In an illegal coloring, a student could be booked for multiple exams at once!

*_Edge_ coloring* is less common, but it's also a thing. A legal _edge_ coloring means no nodes have two edges with the same color. 

#### degree
The *degree* of a node is the number of edges connected to the node.
```
                       -----(D)  DEGREE: 1
                     /
                  (A)  DEGREE: 3
                /     \
              /         \
            (B)---------(C)
        DEGREE: 2     DEGREE: 2
```
The *maximum degree* of a graph is the highest degree of all the nodes. The graph above has a maximum degree of 3.