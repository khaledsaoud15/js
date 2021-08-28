// you probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes(), which must take in input array, containing the names of people who 
// like an item. It must return the display text as shown in the examples:

// likes([]) -- must be "no one likes this"
// likes(["Peter"]) -- must be "Peter likes this"
// likes(["Jacob", "Alex"]) -- must be "Jacob and Alex like this"
// likes(["Max", "John", "Mark"]) -- must be "Max, John and Mark like this"
// likes(["Alex", "Jacob", "Mark", "Max"]["Alex", "Jacob", "Mark", "Max"]) -- must be "Alex, Jacob and 2 others like this"

function likes(array) {    
    
    let longueur = array.length

    
          switch (longueur) {
            case 0:
            console.log('No one likes this')
              break;
            case  1 :
            console.log(`${array}likes this`)
              break ;
              case  2 :
            console.log(`${array}like this`)
                break 
                case  3 :
            console.log(`${array}like this`)
                    break;
            default:
              console.log(`${array[0]} ${array[1]} and ${longueur-2} like this post`)
            }
        } 
            let name= [] ;
            let name1= ["Alex"] ;
            let name2= ["Jacob", "Mark"] ;
            let name3= ["Jacob", "Mark","ImenE"] ;
            let name4= ["Jacob", "Mark","ImenE", "Max"] ;
            let name5= ["Alex", "Jacob", "Mark","ImenE", "Max"];
            console.log(likes(name5))