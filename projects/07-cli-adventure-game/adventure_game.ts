import inquirer from "inquirer";

// enemies variables
let enemies: string[] = ["skeleton", "zombie", "creeper", "spider"];
let max_enemy_health = 75;
let enemy_attack_damage = 25;

// player variables
let player_health = 100;
let player_attack_damage = 50;
let total_health_potions = 3;
let max_health_potion_heal = 30;
let health_potion_drop_chances = 50; // percentage

let running: boolean = true;

console.log("Welcome to the Dungeon!!!");

GAME: 
while (running) {
    console.log("-".repeat(50));

    let enemy_health = Math.floor((Math.random() * max_enemy_health) + 1);
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];

    console.log(`\t# ${enemy} has appeared #\n`);

    while (enemy_health > 0) {
        console.log(`\t Your HP: ${player_health}`);
        console.log(`\t ${enemy}'s HP: ${enemy_health}`);

        let player_choices = await inquirer.prompt([
            {
                name: "select",
                message: "What would you like to do: \n",
                type: "list",
                choices: [
                    "1. Attack",
                    "2. Drink Health Potion",
                    "3. Run!"
                ]
            }
        ]);

        switch (player_choices.select) {
            case "1. Attack":
                let damage_dealt = Math.floor(Math.random() * player_attack_damage + 1);
                let damage_taken = Math.floor(Math.random() * enemy_attack_damage + 1);

                enemy_health -= damage_dealt;
                player_health -= damage_taken;

                console.log(`\t> You strike the ${enemy} for ${damage_dealt} damage.`);
                console.log(`\t> You receive ${damage_taken} in retaliation.`);

                if (player_health < 1) {
                    console.log("You have taken too much damage, You are too weak to go on!!!");
                    break GAME;
                }

                if (enemy_health <= 0) {
                    console.log(`# ${enemy} was defeated! #`);
                    console.log(`# You have ${player_health}HP left. #`);

                    if (Math.floor(Math.random() * 100) + 1 < health_potion_drop_chances) {
                        total_health_potions++;
                        console.log(`# The ${enemy} has dropped a health potion. #`);
                        console.log(`# You now have ${total_health_potions} health potion(s). #`);
                    }

                    let player_choices_02 = await inquirer.prompt([
                        {
                            name: "select",
                            message: "What would you like to do?",
                            type: "list",
                            choices: [
                                "1. Continue fighting",
                                "2. Exit dungeon"
                            ]
                        }
                    ]);

                    if (player_choices_02.select === "1. Continue fighting") {
                        console.log("You continue on your adventure!!");
                    } else {
                        console.log("You exit the dungeon successfully!!");
                        break GAME;
                    }
                }
                break;

            case "2. Drink Health Potion":
                if (total_health_potions > 0) {
                    player_health += max_health_potion_heal;
                    total_health_potions--;
                    console.log(`\t> You drink a health potion, healing yourself for ${max_health_potion_heal}. \n\t> You now have ${player_health}HP. \n\t> You have ${total_health_potions} health potions left.\n`);
                } else {
                    console.log(`\t> You have no health potions left! Defeat an enemy for a chance to get one! \n`);
                }
                break;

            case "3. Run!":
                console.log(`\t> You ran away from the ${enemy}!`);
                continue GAME;

            default:
                console.log("\t> Invalid command!");
        }

        if (player_health < 1) {
            console.log("You limp out of the dungeon, weak from battle!");
            break GAME;
        }

        console.log("_".repeat(50));
    }
}

console.log(" \n","#".repeat(50), "\n");
console.log("\t\t# THANKS FOR PLAYING! # \n");
console.log(" ","#".repeat(50));
