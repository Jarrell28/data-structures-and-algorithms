# Binary Tree / Binary Search Tree
Binary Trees - A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.

Binary Search Trees - A Binary Search Tree (BST) is a type of tree that does have some structure attached to it. In a BST, nodes are organized in a manner where all values that are smaller than the root are placed to the left, and all values that are larger than the root are placed to the right.

## Challenge Description
Create a BinaryTree class:

-Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

Create a BinarySearchTree class:

-Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.

-Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## API

Binary Tree:

-preOrder() - Returns an array of values using preorder strategy

-inOrder() - Returns an array of values using inorder strategy

-postOrder() - Returns an array of values using postorder strategy

Binary Search Tree:

-add(number) - Inserts a new node in the correct location of a Binary Search Tree

-contains(number) - Returns true/false if the number does or does not exist in tree
