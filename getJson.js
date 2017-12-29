 $(document).ready(function(){
            $.getJSON("http://design.propcom.co.uk/buildtest/accordion-data.json", function(result){
                $.each(result, function(i, field){
                    $("#b1").append(field[0].heading);
                    $("#b2").append(field[1].heading);
                    $("#b3").append(field[2].heading);
                    $("#p1").append(field[0].content);
                    $("#p2").append(field[1].content);
                    $("#p3").append(field[2].content);
                });
            });
        });