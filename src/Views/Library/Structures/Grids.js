import React from "react";
import Group from "Components/Group";
import Method from "Components/Method";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Grid Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Robust Data Structures for Working with Grids 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Grid structures module offers classes for creating and manipulating grids, making it ideal for tasks such as pathfinding and spatial data representation in game development. 
                Utilizing these Grid structures allows developers to efficiently manage grid-based data, implement sophisticated spatial logic and simplify pathfinding operations.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 06.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The main classes included are Matrix2D (a generic class for handling 2D grids of any type), Grid2D (an extension of Matrix2D with additional functionalities specific to spatial grids) and Pathfinder2D (a class for implementing pathfinding algorithms on a 2D grid). 
                Some of the use cases are:
            </p>
            <ul>
                <li>Representing and manipulating game boards</li>
                <li>Implementing pathfinding for AI in games</li>
                <li>Spatial data analysis and manipulation</li>
            </ul>
            <Group title="Matrix2D<T>" content={(
                <div>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Matrix2D</b1>(<b2>int</b2> <b1>columns</b1>, <b2>int</b2> <b1>rows</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>Columns</b1>: Amount of columns of the matrix</li>
                        <li><b2>int</b2> <b1>Rows</b1>: Amount of rows of the matrix</li>
                        <li><b2>int</b2> <b1>Count</b1>: Amount of cells in the matrix</li>
                        <li><b2>List{"<T>"}</b2> <b1>Cells</b1>: List if all the cells of the matrix</li>
                    </ul>
                    <h5 className="c-light-1">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>this[int x, int y]</b1>: Returns the value of a given matrix position</li>                    
                        <li><b2>T</b2> <b1>this[Vector2Int position]</b1>: Returns the value of a given matrix position</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <Method 
                    name="Create" 
                    description="Creates a new Matrix2D with the parameters provided"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Matrix2D{"<T>"}</b2> <b1>Create</b1>(<b2>int</b2> <b1>columns</b1>, <b2>int</b2> <b1>rows</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                            <li><b2>Matrix2D{"<T>"}</b2> <b1>Create</b1>(<b2>int</b2> <b1> size</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                            <li><b2>Matrix2D{"<T>"}</b2> <b1>Create</b1>(<b2>Vector2Int</b2> <b1> size</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                        </ul>
                    )}
                    />
                    <Method 
                    name="Get Cell" 
                    description="Returns the cell at the specified position"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>T</b2> <b1>GetCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>T</b2> <b1>GetCell</b1>(<b2>Vector2Int</b2> <b1> position</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Set Cell" 
                    description="Sets the cell at the specified position"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>SetCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>, <b2>T</b2> <b1>value</b1>)</li>                        
                            <li><b2>void</b2> <b1>SetCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>, <b2>T</b2> <b1>value</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Set Cell List" 
                    description="Sets a list of cells at the specified positions"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>SetCellList</b1>(<b2>List{"<Vector2Int>"}</b2> <b1>positions</b1>, <b2>Func{"<int, int, T, T>"}</b2> <b1>values</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Create Pathfinder" 
                    description="Creates a Pathfinder2D object based on the current Matrix2d"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Pathfinder2D</b2> <b1>CreatePathfinder</b1>()</li>
                            <li><b2>Pathfinder2D</b2> <b1>CreatePathfinder</b1>(<b2>Action{"<int, int, Matrix2D<T>, PathNode>"}</b2> <b1>instanciator</b1>)</li>
                        </ul>
                    )}
                    />
                    <Method 
                    name="Get Steps" 
                    description="Returns the minimum amount of cells between two different positions"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>                        
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Get Distance" 
                    description="Returns the linear distance between two positions"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Get Linear Index" 
                    description="Returns the index of a specified cell within the grid, treating the grid as a single-dimensional list"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>int</b2> <b1>GetLinearIndex</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>int</b2> <b1>GetLinearIndex</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="On Cell Change" 
                    description="Executes an action every time a cell value is set. The action takes as parameters the column and row numbers and the cell value"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Matrix2D{"<T>"}</b2> <b1>OnCellChange</b1>(<b2>Action{"<int, int, T>"}</b2> <b1>onValueChanged</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Loop" 
                    description="Executes a specified action on each cell within the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>Loop</b1>(<b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Loop Col" 
                    description="Executes a specified action on each cell within a given column of the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>LoopCol</b1>(<b2>int</b2> <b1>col</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                            <li><b2>void</b2> <b1>LoopCol</b1>(<b2>Vector2Int</b2> <b1>position</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Loop Row" 
                    description="Executes a specified action on each cell within a given row of the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>LoopRow</b1>(<b2>int</b2> <b1>row</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                            <li><b2>void</b2> <b1>LoopRow</b1>(<b2>Vector2Int</b2> <b1>position</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Loop Square" 
                    description="Executes a specified action on each cell within a given square of the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>LoopSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                            <li><b2>void</b2> <b1>LoopSquare</b1>(<b2>Vector2Int</b2> <b1>startPosition</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                            <li><b2>void</b2> <b1>LoopSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>Vector2Int</b2> <b1>endPosition</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                            <li><b2>void</b2> <b1>LoopSquare</b1>(<b2>Vector2Int</b2> <b1>startPosition</b1>, <b2>Vector2Int</b2> <b1>endPosition</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Symmetric"
                    description="Returns the cell that is symmetrically opposite to a specified cell within the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>T</b2> <b1>GetSymmetric</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>, <b2>bool</b2> <b1>colSymetry</b1>, <b2>bool</b2> <b1>rowSymetry</b1>)</li>
                            <li><b2>T</b2> <b1>GetSymmetric</b1>(<b2>Vector2Int</b2> <b1>position</b1>, <b2>bool</b2> <b1>colSymetry</b1>, <b2>bool</b2> <b1>rowSymetry</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Neighbouring Cell" 
                    description="Returns the given cell that surrounds a specified cell"
                    signatures={(
                        <ul className="property-list">
                        <li><b2>T</b2> <b1>GetNorthCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                        <li><b2>T</b2> <b1>GetNorthCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        <li><b2>T</b2> <b1>GetSouthCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                        <li><b2>T</b2> <b1>GetSouthCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        <li><b2>T</b2> <b1>GetEastCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                        <li><b2>T</b2> <b1>GetEastCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        <li><b2>T</b2> <b1>GetWestCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                        <li><b2>T</b2> <b1>GetWestCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        <li><b2>T</b2> <b1>GetNorthEastCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                        <li><b2>T</b2> <b1>GetNorthEastCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        <li><b2>T</b2> <b1>GetNorthWestCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                        <li><b2>T</b2> <b1>GetNorthWestCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        <li><b2>T</b2> <b1>GetSouthEastCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                        <li><b2>T</b2> <b1>GetSouthEastCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        <li><b2>T</b2> <b1>GetSouthWestCell</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                        <li><b2>T</b2> <b1>GetSouthWestCell</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>                        
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Neighbour Cells" 
                    description="Returns a list of all the cells that surrounds the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetNeighbourCells</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetNeighbourCells</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Adjacent Cells" 
                    description="Returns a list of all the cells that are direct contact with the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetAdjacentCells</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetAdjacentCells</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Corner Cells" 
                    description="Returns a list of all cells that are positioned at the corners surrounding the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetCornerCells</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetCornerCells</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Cells In Col" 
                    description="Returns a list of all cells that are in the specified column"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInCol</b1>(<b2>int</b2> <b1>col</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInCol</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Cells In Row" 
                    description="Returns a list of all cells that are in the specified row"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInRow</b1>(<b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInRow</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Cells In Square" 
                    description="Returns a list of all cells that are in the specified square"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInSquare</b1>(<b2>Vector2Int</b2> <b1>startPosition</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>Vector2Int</b2> <b1>endPosition</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInSquare</b1>(<b2>Vector2Int</b2> <b1>startPosition</b1>, <b2>Vector2Int</b2> <b1>endPosition</b1>)</li>
                        </ul>
                    )}
                    />                                      
                    <Method 
                    name="Get Neighbour Positions" 
                    description="Returns a list of the positions of all the cells that surrounds the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetNeighbourPositions</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetNeighbourPositions</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Adjacent Positions" 
                    description="Returns a list of the positions of all the cells that are direct contact with the specified cell"
                    signatures={(
                        <ul className="property-list">                        
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetAdjacentPositions</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetAdjacentPositions</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Corner Positions" 
                    description="Returns a list of the positions of all cells that are positioned at the corners surrounding the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetCornerPositions</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetCornerPositions</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Positions In Col" 
                    description="Returns a list of the positions of all cells that are in the specified column"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInCol</b1>(<b2>int</b2> <b1>col</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInCol</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Positions In Row" 
                    description="Returns a list of the positions of all cells that are in the specified row"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInRow</b1>(<b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInRow</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Positions In Square" 
                    description="Returns a list of the positions of all cells that are in the specified square"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInSquare</b1>(<b2>Vector2Int</b2> <b1>startPosition</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>Vector2Int</b2> <b1>endPosition</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInSquare</b1>(<b2>Vector2Int</b2> <b1>startPosition</b1>, <b2>Vector2Int</b2> <b1>endPosition</b1>)</li>                        
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Wrap To Grid" 
                    description="Wraps a given position to the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector2Int</b2> <b1>WrapToGrid</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>Vector2Int</b2> <b1>WrapToGrid</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Clamp To Grid" 
                    description="Clamps a given position to the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector2Int</b2> <b1>ClampToGrid</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>Vector2Int</b2> <b1>ClampToGrid</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Grid Distance" 
                    description="Returns the relative position between two cells in grid distance"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>                        
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Bounds Check" 
                    description="Verifies if the given position is within the grid's boundaries"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>bool</b2> <b1>BoundsCheck</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>bool</b2> <b1>BoundsCheck</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>                        
                            <li><b2>bool</b2> <b1>VerticalBoundsCheck</b1>(<b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>bool</b2> <b1>VerticalBoundsCheck</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                            <li><b2>bool</b2> <b1>NorthBoundCheck</b1>(<b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>bool</b2> <b1>NorthBoundCheck</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                            <li><b2>bool</b2> <b1>SouthBoundCheck</b1>(<b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>bool</b2> <b1>SouthBoundCheck</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                            <li><b2>bool</b2> <b1>HorizontalBoundsCheck</b1>(<b2>int</b2> <b1>col</b1>)</li>
                            <li><b2>bool</b2> <b1>HorizontalBoundsCheck</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                            <li><b2>bool</b2> <b1>EastBoundCheck</b1>(<b2>int</b2> <b1>col</b1>)</li>
                            <li><b2>bool</b2> <b1>EastBoundCheck</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                            <li><b2>bool</b2> <b1>WestBoundCheck</b1>(<b2>int</b2> <b1>col</b1>)</li>
                            <li><b2>bool</b2> <b1>WestBoundCheck</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />
                </div>
            )}/>
            <Group title="Grid2D<T> : Matrix2D<T>" content={(
                <div>
                    <p>
                        Inherits all properties and methods from Matrix2D.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Grid2D</b1>(<b2>int</b2> <b1>columns</b1>, <b2>int</b2> <b1>rows</b1>, <b2>Vector2</b2> <b1>cellSize</b1>, <b2>Vector3</b2> <b1>position</b1>, <b2>PLANE</b2> <b1>plane</b1>, <b2>Vector2</b2> <b1>spacing</b1>, <b2>float</b2> <b1>oddShift</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Vector3</b2> <b1>Position</b1>: The world position of the grid</li>                    
                        <li><b2>Vector3</b2> <b1>Center</b1>: The world position of the center of the grid</li>                    
                        <li><b2>float</b2> <b1>Width</b1>: The total width of the grid</li>                    
                        <li><b2>float</b2> <b1>Height</b1>: The total hight of the grid</li>                    
                        <li><b2>Vector2</b2> <b1>CellSize</b1>: The size of each cell</li>                    
                        <li><b2>Vector3</b2> <b1>WorldCellSize</b1>: The size of each cell based of the plane of the grid</li>                    
                        <li><b2>PLANE</b2> <b1>Plane</b1>: The plane in with the grid is set</li>                    
                        <li><b2>Vector2</b2> <b1>Spacing</b1>: The spacing between cells</li>                    
                        <li><b2>float</b2> <b1>OddShift</b1>: The position shift of the odd rows</li>                    
                    </ul>
                    <h5 className="c-light-1">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>this[Vector3 position]</b1>: Returns the value of a given matrix position</li>                    
                    </ul>

                    <h5 className="c-light-1">Methods</h5>
                    <Method 
                    name="Create" 
                    description="Creates a new Grid2D with the parameters provided"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>static Grid2D{"<T>"}</b2> <b1>Create</b1>(<b2>int</b2> <b1>columns</b1>, <b2>int</b2> <b1>rows</b1>, <b2>float</b2> <b1>cellSize</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                            <li><b2>static Grid2D{"<T>"}</b2> <b1>Create</b1>(<b2>int</b2> <b1>columns</b1>, <b2>int</b2> <b1>rows</b1>, <b2>Vector2</b2> <b1>cellSize</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                            <li><b2>static Grid2D{"<T>"}</b2> <b1>Create</b1>(<b2>int</b2> <b1>size</b1>, <b2>float</b2> <b1>cellSize</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                            <li><b2>static Grid2D{"<T>"}</b2> <b1>Create</b1>(<b2>int</b2> <b1>size</b1>, <b2>Vector2</b2> <b1>cellSize</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                            <li><b2>static Grid2D{"<T>"}</b2> <b1>Create</b1>(<b2>Vector2Int</b2> <b1>size</b1>, <b2>float</b2> <b1>cellSize</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                            <li><b2>static Grid2D{"<T>"}</b2> <b1>Create</b1>(<b2>Vector2Int</b2> <b1>size</b1>, <b2>Vector2</b2> <b1>cellSize</b1>, <b2>Func{"<int, int, Matrix2D<T>, T>"}</b2> <b1>instanciator</b1>)</li>
                        </ul>
                    )}
                    />
                    <Method 
                    name="Print" 
                    description="Prints the grid using gizmos"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>Print</b1>(<b2>float</b2> <b1> duration</b1>, <b2>Color?</b2> <b1> color</b1>)</li>                        
                        </ul>
                    )}
                    />
                    <Method 
                    name="Center Grid" 
                    description="Positions the grid at the current center of the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Grid2D{"<T>"}</b2> <b1>CenterGrid</b1>()</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Get Cell" 
                    description="Returns the cell at the specified position"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>T</b2> <b1>GetCell</b1>(<b2>Vector3</b2> <b1> position</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Set Cell" 
                    description="Sets the cell at the specified position"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>SetCell</b1>(<b2>Vector3</b2> <b1>position</b1>, <b2>T</b2> <b1>value</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Set Cell List" 
                    description="Sets a list of cells at the specified positions"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>SetCellList</b1>(<b2>List{"<Vector3>"}</b2> <b1>positions</b1>, <b2>Func{"<int, int, T, T>"}</b2> <b1>values</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Get Steps" 
                    description="Returns the minimum amount of cells between two different positions"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>                        
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>                        
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>                        
                            <li><b2>int</b2> <b1>GetSteps</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Get Distance" 
                    description="Returns the linear distance between two positions"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>
                            <li><b2>float</b2> <b1>GetDistance</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Get Linear Index" 
                    description="Returns the index of a specified cell within the grid, treating the grid as a single-dimensional list"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>int</b2> <b1>GetLinearIndex</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="On Position Change" 
                    description="Executes an action on every cell whenever the position of the grid changes"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Grid2D{"<T>"}</b2> <b1>OnPositionChange</b1>(<b2>Action{"<int, int>"}</b2> <b1>onPositionChanged</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="On Print" 
                    description="Executes an action everytime a cell the a cell is printed with gizmos by the Print method"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Grid2D{"<T>"}</b2> <b1>OnPrint</b1>(<b2>Action{"<int, int, T>"}</b2> <b1>onPrint</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Loop Col" 
                    description="Executes a specified action on each cell within a given column of the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>LoopCol</b1>(<b2>Vector3</b2> <b1>position</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Loop Row" 
                    description="Executes a specified action on each cell within a given row of the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>LoopRow</b1>(<b2>Vector3</b2> <b1>position</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>                        
                        </ul>
                    )}
                    /> 
                    <Method 
                    name="Loop Square" 
                    description="Executes a specified action on each cell within a given square of the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>LoopSquare</b1>(<b2>Vector3</b2> <b1>startPosition</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                            <li><b2>void</b2> <b1>LoopSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>Vector3</b2> <b1>endPosition</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                            <li><b2>void</b2> <b1>LoopSquare</b1>(<b2>Vector3</b2> <b1>startPosition</b1>, <b2>Vector3</b2> <b1>endPosition</b1>, <b2>Action{"<int, int, T>"}</b2> <b1>action</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Symmetric"
                    description="Returns the cell that is symmetrically opposite to a specified cell within the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>T</b2> <b1>GetSymmetric</b1>(<b2>Vector3</b2> <b1>position</b1>, <b2>bool</b2> <b1>colSymetry</b1>, <b2>bool</b2> <b1>rowSymetry</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Neighbouring Cell" 
                    description="Returns the given cell that surrounds a specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>T</b2> <b1>GetNorthCell</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                            <li><b2>T</b2> <b1>GetSouthCell</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                            <li><b2>T</b2> <b1>GetEastCell</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                            <li><b2>T</b2> <b1>GetWestCell</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                            <li><b2>T</b2> <b1>GetNorthEastCell</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                            <li><b2>T</b2> <b1>GetNorthWestCell</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                            <li><b2>T</b2> <b1>GetSouthEastCell</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                            <li><b2>T</b2> <b1>GetSouthWestCell</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>                        
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Neighbour Cells" 
                    description="Returns a list of all the cells that surrounds the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetNeighbourCells</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Adjacent Cells" 
                    description="Returns a list of all the cells that are direct contact with the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetAdjacentCells</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>        
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Corner Cells" 
                    description="Returns a list of all cells that are positioned at the corners surrounding the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetCornerCells</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Cells In Col" 
                    description="Returns a list of all cells that are in the specified column"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInCol</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Cells In Row" 
                    description="Returns a list of all cells that are in the specified row"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInRow</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Cells In Square" 
                    description="Returns a list of all cells that are in the specified square"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInSquare</b1>(<b2>Vector3</b2> <b1>startPosition</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>Vector3</b2> <b1>endPosition</b1>)</li>
                            <li><b2>List{"<T>"}</b2> <b1>GetCellsInSquare</b1>(<b2>Vector3</b2> <b1>startPosition</b1>, <b2>Vector3</b2> <b1>endPosition</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="World To Grid" 
                    description="Extracts the specified plane's axes (or the grids plane's axes) from a Vector3 and returns them as a Vector2"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector2</b2> <b1>WorldToGrid</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                            <li><b2>static Vector2</b2> <b1>WorldToGrid</b1>(<b2>PLANE</b2> <b1>plane</b1>, <b2>Vector3</b2> <b1>vector</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Grid To World" 
                    description="Converts a Vector2 into a Vector3, aligning the specified axes based on the given plane (or the grids plane) and setting the remaining axis to 0"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector3</b2> <b1>GridToWorld</b1>(<b2>Vector2</b2> <b1>position</b1>)</li>
                            <li><b2>static Vector3</b2> <b1>GridToWorld</b1>(<b2>PLANE</b2> <b1>plane</b1>, <b2>Vector2</b2> <b1>vector</b1>)</li>                                
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Cell From Position" 
                    description="Returns the grid position of a certain cell based on a world position"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector2Int</b2> <b1>GetCellFromPosition</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="World Position" 
                    description="Returns the world position of a certain cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector3</b2> <b1>WorldPosition</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>                        
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Cell Position" 
                    description="Returns the world position of the center of a cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector3</b2> <b1>GetCellPosition</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                            <li><b2>Vector3</b2> <b1>GetCellPosition</b1>(<b2>Vector2Int</b2> <b1>position</b1>)</li>
                            <li><b2>Vector3</b2> <b1>GetCellPosition</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Neighbour Positions" 
                    description="Returns a list of the positions of all the cells that surrounds the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetNeighbourPositions</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Adjacent Positions" 
                    description="Returns a list of the positions of all the cells that are direct contact with the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetAdjacentPositions</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Corner Positions" 
                    description="Returns a list of the positions of all cells that are positioned at the corners surrounding the specified cell"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetCornerPositions</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>                        
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Positions In Col" 
                    description="Returns a list of the positions of all cells that are in the specified column"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInCol</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Positions In Row" 
                    description="Returns a list of the positions of all cells that are in the specified row"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInRow</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Positions In Square" 
                    description="Returns a list of the positions of all cells that are in the specified square"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInSquare</b1>(<b2>Vector3</b2> <b1>startPosition</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInSquare</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>Vector3</b2> <b1>endPosition</b1>)</li>
                            <li><b2>List{"<Vector2Int>"}</b2> <b1>GetPositionsInSquare</b1>(<b2>Vector3</b2> <b1>startPosition</b1>, <b2>Vector3</b2> <b1>endPosition</b1>)</li>                                                
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Wrap To Grid" 
                    description="Wraps a given world position to the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector2Int</b2> <b1>WrapToGrid</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Clamp To Grid" 
                    description="Clamps a given world position to the grid"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector2Int</b2> <b1>ClampToGrid</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Get Grid Distance" 
                    description="Returns the relative position between two cells in grid distance"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>int</b2> <b1>originCol</b1>, <b2>int</b2> <b1>originRow</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>int</b2> <b1>targetCol</b1>, <b2>int</b2> <b1>targetRow</b1>)</li>
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>Vector2Int</b2> <b1>origin</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>Vector2Int</b2> <b1>target</b1>)</li>
                            <li><b2>Vector2Int</b2> <b1>GetGridDistance</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>Vector3</b2> <b1>target</b1>)</li>
                        </ul>
                    )}
                    />                    
                    <Method 
                    name="Bounds Check" 
                    description="Verifies if the given position is within the grid's boundaries"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>bool</b2> <b1>BoundsCheck</b1>(<b2>Vector3</b2> <b1>position</b1>)</li>                        
                        </ul>
                    )}
                    />
                </div>
            )}/>
            <Group title="Pathfinder2D" content={(
                <div>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Pathfinder2D</b1>(<b2>Grid2D{"<PathNode>"}</b2> <b1>matrix</b1>)</li>
                        <li><b1>Pathfinder2D</b1>(<b2>Matrix2D{"<PathNode>"}</b2> <b1>matrix</b1>)</li>
                        <li><b1>Pathfinder2D</b1>(<b2>int</b2> <b1>width</b1>, <b2>int</b2> <b1>height</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>MOVE_STRAIGHT_COST</b1>: The cost straight movements</li>                    
                        <li><b2>int</b2> <b1>MOVE_DIAGONAL_COST</b1>: The cost diagonal movements</li>                    
                        <li><b2>bool</b2> <b1>DisableDiagonalMove</b1>: Disable diagonal movement in the path</li>                    
                        <li><b2>bool</b2> <b1>DisableStraightMove</b1>: Disable straight movement in the path</li>                    
                        <li><b2>Matrix2D{"<PathNode>"}</b2> <b1>Matrix</b1>: Matrix the pathfinder is based on</li>                    
                    </ul>
                    <h5 className="c-light-1">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>PathNode</b2> <b1>this[int col, int row]</b1>: Returns the PathNode of a given matrix position</li>                    
                        <li><b2>PathNode</b2> <b1>this[Vector2Int position]</b1>: Returns the PathNode of a given matrix position</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>

                    <Method 
                    name="Find Path" 
                    description="Calculates and returns a path from a given start node to a given end node"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>List{"<PathNode>"}</b2> <b1>FindPath</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>)</li>
                            <li><b2>List{"<PathNode>"}</b2> <b1>FindPath</b1>(<b2>int</b2> <b1>startCol</b1>, <b2>int</b2> <b1>startRow</b1>, <b2>Vector2Int</b2> <b1>end</b1>)</li>
                            <li><b2>List{"<PathNode>"}</b2> <b1>FindPath</b1>(<b2>Vector2Int</b2> <b1>start</b1>, <b2>int</b2> <b1>endCol</b1>, <b2>int</b2> <b1>endRow</b1>)</li>
                            <li><b2>List{"<PathNode>"}</b2> <b1>FindPath</b1>(<b2>Vector2Int</b2> <b1>start</b1>, <b2>Vector2Int</b2> <b1>end</b1>)</li>
                        </ul>
                    )}
                    />
                </div>
            )}/>
            <Group title="PathNode" content={(
                <div>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>PathNode</b1>(<b2>int</b2> <b1>col</b1>, <b2>int</b2> <b1>row</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>PathNode</b2> <b1>CameFromNode</b1>: The previous node in the path</li>                    
                        <li><b2>bool</b2> <b1>IsWalkable</b1>: If false, this node will not be taken into account when calculating the path</li>                    
                        <li><b2>int</b2> <b1>Penalty = 0</b1>: The cost of using this node in the path. The higher the penalty, the lower the chances of using this node in a path. Default is 0</li>                    
                        <li><b2>int</b2> <b1>G</b1>: The G cost of the node</li>                    
                        <li><b2>int</b2> <b1>H</b1>: The H cost of the node</li>                    
                        <li><b2>int</b2> <b1>F</b1>: The F cost of the node</li>
                        <li><b2>int</b2> <b1>Col</b1>: The column of the node within the matrix</li>                    
                        <li><b2>int</b2> <b1>Row</b1>: The row of the node within the matrix</li>
                        <li><b2>Vector2Int</b2> <b1>Position</b1>: The position of the node within the matrix</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <Method 
                    name="Reset" 
                    description="Resets the PathNode to its default values"
                    signatures={(
                        <ul className="property-list">
                            <li><b2>void</b2> <b1>Reset</b1>()</li>
                        </ul>
                    )}
                    />
                    <Method 
                    name="ToString" 
                    signatures={(
                        <ul className="property-list">
                            <li><b2>string override</b2> <b1>ToString</b1>(): Returns the string value of the node. ie: [col,row]</li>
                            <li><b2>static string</b2> <b1>ToString</b1>(<b2>{"List<PathNode>"}</b2> <b1>path</b1>): Returns a string with all the nodes in the path. ie: {"(Path (length): [col1,row1] -> ... -> [colN,rowN])"}</li>
                        </ul>
                    )}
                    />
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Creating and Using a Matrix2D" content={(
                <div>
                    <p>
                        This Unity C# script demonstrates how to create and interact with a Matrix2D{"<int>"} using the Magikus library. 
                        It first initializes a 5×5 matrix filled with zeros, then updates a specific cell at (2,2) with the value 42. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 01.jpg" alt=""/>            
                    <p>
                        The script retrieves and logs this value before applying a loop function to iterate over all matrix cells, printing their coordinates and values to the console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-45" src="images/Library/Structures/Grids/Grids - 11.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Using Grid2D for Game Objects" content={(
                <div>
                    <p>
                        This script first creates a 5x5 grid of GameObject references, initializes a new game object and places it at position (1,1).
                        Then, it retrieves and logs the object from that position.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 02.jpg" alt=""/>            
                    <p>
                        Finally, it iterates over all grid cells, logging the names of any non-null objects, showcasing how to store and manipulate game objects within a structured grid.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-45" src="images/Library/Structures/Grids/Grids - 12.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Finding a Path with Pathfinder2D" content={(
                <div>
                    <p>
                        This script demonstrates how to find a path in a 2D grid. 
                        First, a Matrix2D{"<int>"} grid of size 10x10 is created and initialized with zeros. 
                        Then, a Pathfinder2D instance is generated for pathfinding. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 03.jpg" alt=""/>            
                    <p>
                        The script defines a start position (0,0) and a goal position (9,9), then finds and logs the path using the FindPath method.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 13.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Using the Matrix Editor" content={(
                <div>
                    <p>
                        In this example, we'll take a look at the Matrix Editor. 
                        The Matrix Editor allows us to visualize the contents of a <b1>Matrix2D</b1> (or <b1>Grid2D</b1>) in real time.
                    </p>
                    <p>
                        The script first initializes a 5x15 matrix filled with zeros, then uses InvokeRepeating to update the matrix at a rate of four times per second. 
                        The UpdateMatrix method modifies matrix values sequentially, increasing a _value counter and updating positions in a row-wise manner. 
                        Once the end of a row is reached, it moves to the next row, looping back to the top when all rows are processed. 
                        The process can be stopped using the Stop() method, which cancels the invocation.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 04.jpg" alt=""/>            
                    <p>
                        Make sure that the Matrix2D is set as a public field so that the inspector can serialize it. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 05.jpg" alt=""/>            
                    <p>
                        When the visualize button is pressed, a Matrix 2D Editor window will open displaying the matrix data. 
                        Notice that if the matrix is empty or not initialized the editor will not display anything.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 01.gif" alt=""/>            
                    <p>
                        The Flip button rotates the matrix flipping the rows with the columns.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 07.jpg" alt=""/>            
                    <p>
                        The Positions button makes the indices display the actual position of the item in the matrix.
                        This feature can help to understand better the grid.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 08.jpg" alt=""/>            
                    <p>
                        The Mirror H button allows to flip the matrix horizontaly.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 09.jpg" alt=""/>            
                    <p>
                        The Mirror V button allows to flip the matrix vertically.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Grids/Grids - 10.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that the types used in <b1>Matrix2D{"<T>"}</b1> are compatible with the operations you intend to perform.</li>
                <li>When using Pathfinder2D, make sure the start and end positions are within the bounds of the matrix.</li>
                <li>The Map methods are powerful for applying actions to multiple cells but should be used with care to avoid performance issues on large grids.</li>
                <li>The Matrix 2D Editor window and it's features does not modify the values of the matrix displayed. Its only purpose is to help visualize the grid.</li>
            </ul>
      </div>
    );
}