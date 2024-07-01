$(document).ready(function() {
    console.log('Document is ready');
    var username = '';
    var promptText = 'please enter your username: ';
    var rootPrompt = '$root@';
    
    var term = $('.terminal').terminal({
        clear: function() {
            this.clear();
        },
        color: function(number) {
            var colors = ['#000000', '#0000FF', '#008000', '#00FFFF', '#FF0000', '#FF00FF', '#FFFF00', '#FFFFFF'];
            if (number >= 0 && number < colors.length) {
                $('.terminal').css('color', colors[number]);
            } else {
                this.echo('Invalid color number');
            }
        },
        help: function() {
            this.echo('color 0 - Black');
            this.echo('color 1 - Blue');
            this.echo('color 2 - Green');
            this.echo('color 3 - Cyan');
            this.echo('color 4 - Red');
            this.echo('color 5 - Magenta');
            this.echo('color 6 - Yellow');
            this.echo('color 7 - White');
        },
        handleUnknownCommand: function(command) {
            this.echo("Command '" + command + "' Not Found!");
        }
    }, {
        greetings:
        '___________                  .__              .__      _____________________________\n' + 
        '\\__    ___/__________  _____ |__| ____ _____  |  |    /  _____/\\______   \\__    ___/\n' + 
        '  |    |_/ __ \\_  __ \\/     \\|  |/    \\\\__  \\ |  |   /   \\  ___ |     ___/ |    |   \n' + 
        '  |    |\\  ___/|  | \\/  Y Y  \\  |   |  \\/ __ \\|  |__ \\    \\_\\  \\|    |     |    |   \n' + 
        '  |____| \\___  >__|  |__|_|  /__|___|  (____  /____/  \\______  /|____|     |____|   \n' + 
        '             \\/            \\/        \\/     \\/               \\/                     \n',
        prompt: promptText,
        onInit: function(term) {
            this.echo('Welcome to Terminal GPT');
            // Log to check terminal initialization
            console.log('Terminal initialized'); 
        },
        onBlur: function() {
            return false; // prevent losing focus
        },
        keydown: function(e) {
            if (username === '' && e.which === 13) { // Enter key
                username = this.get_command().trim();
                if (username) {
                    promptText =  rootPrompt + username + ":";
                    this.set_prompt(promptText);
                    this.clear();
                }
                return false;
            }
        },
        execute: function(command) {
            // Extract the command (first word)
            var cmd = command.split(' ')[0]; 
            // Extract arguments (rest of the command)
            var args = command.substring(cmd.length).trim(); 
            
            switch (cmd) {
                case 'color':
                    var colorIndex = parseInt(args);
                    if (!isNaN(colorIndex) && colorIndex >= 0 && colorIndex <= 7) {
                        $('.terminal').css('color', ['#000000', '#0000FF', '#008000', '#00FFFF', '#FF0000', '#FF00FF', '#FFFF00', '#FFFFFF'][colorIndex]);
                    } else {
                        this.echo('Invalid color number');
                    }
                    break;
                default:
                    this.handleUnknownCommand(command);
                    break;
            }
        }
    });

    term.set_prompt(function(callback) {
        callback(promptText);
    });
});
