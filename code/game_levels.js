var GAME_LEVELS = [
  ["  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  xx            x!!x     yyyy                               yyyy               x",
   "  xx            xvvx   yyyyyyyy                           yyyyyyyy             x",
   "  xx                     yyyy                               yyyy               x",
   "  xx @                                                                oo       x",
   "  xxxxxxx                                          oo      **    xxxxxxxx      x",
   "  xxxxxxx                                         xxxx     xx    xxxxxxxx      x",
   "  xxxxxxx              **       xxxxxx            xxxx                         x",
   "  xxxxxxx             xxxx      xxxxxx                                         x",
   "  xxxxxxx             xxxx                  oo                                 x",
   "  xxxxxxx      o                          <xxxx                             o  x",
   "  xxxxxxx    xxxx                          xxxx                                x",
   "  xxxxxxx!!!!xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x x!x",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",],
  ["!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!xxxxxxxxxxv                         x!!xxxxxxxxxx                                                               ",
   "!!!!xx       x    xxx      yyyy         xx!!!!!!!!!!xx                                                              ",
   "!!!!xx @     x    x!x     yyyyyy         xxxxxxxxxx!!x                                               o  o           ",
   "!!!!xxxxxx   x    xvx      yyyy                   xx!x  y                                           xxxxxx          ",
   "!!!!xx       x                                     x!x yyy                                                          ",
   "!!!!xx       x                                     xvx  y                                                           ",
   "!!!!xx       x           xxxxxxxxxxxxxxxxxxxxxxxx                                               o                   ",
   "!!!!xx     ! x           !!!!!!!!!!!!!!!!!!!!!!!x                             <                 x                   ",
   "!!!!xx       x           vvvvvvvvvvvvvvvvvvvvvvvx                                                                   ",
   "!!!!xx       x                                  x      xxx                             o                            ",
   "!!!!xx   *   x                                  x      x                               x                            ",
   "!!!!xx       x                                  x      x                                                            ",
   "!!!!xx !     x                                  x*     x                                       *                    ",
   "!!!!xx       x                                  xx     x                 <                     x                    ",
   "!!!!xx       x                                  x      x      o  o                                                  ",
   "!!!!xx       x                                  x      x                                                            ",
   "!!!!xx       x                                  x     *x     xxxxxx                   o                             ",
   "!!!!xx       x                                  x     xx                              x                             ",
   "!!!!xx       x           xxxxxxxxxxxxxx         x    !!!                                                            ",
   "!!!!xx     !                          x         x    !x!!                                                           ",
   "!!!!xx                    **          x         x*   !x!!!                                                          ",
   "!!!!xx                xxxxxxxxx       xx!!!!!!!!xx   !x!!!!!!!!!!                     xxxx                          ",
   "!!!!xx  oo             <x!!!!!x        xxxxxxxxxx    !x!!!!!!!xx!          o  o            <                        ",
   "!!!!xxxxxxxxx           x!!!!!x    o                !xx!!!!!!xx !         xxxxxx                                    ",
   "!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!x            =        !x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!xx       xxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  x         x!!!!x         x                                               x||||                             x",
   "  x         xv!!!x         x                                               x                                 x",
   "  x         x !!vx         x                  xxxxxxx                      x                     xxxxxxxxxxxxx",
   "  x         x v! x         x               xxxx!!!!!x                       x                     x|!!!!!!!!!!x",
   "  x         x  v  4        xxxxxxxxxxxxxxxxxx!!vvvv!x                       x                     x xxxxxxxxxxx",
   "  x                        x               xxx    !x                       x                         oooo  !!x",
   "  x                        x         o     xx     vx                       x                         oooo  !!x",
   "  x               xxxxx  !!x  *xxxxxxxx    xx      x                       x=                        oooo  !!x",
   "  x                   xo !!x  xx                                           x                      !  oooo  !!x",
   "  x         o         x o!!x   x                                           x                      xxxxxxxxxxxx",
   "  x         x         xo !!xo  x         o                                 x=                     x          x",
   "  x                   x o!!xx  x      x!!x                                 x                    oox          x",
   "  x              *    xo !!x   x     x!!!!x                                x                    xxx          x",
   "  x              x    x  !!x   x     xxxxxx                                x=                                x",
   "  x                   x  xxx  *x                                           x          *                      x",
   "  x                   x       xx                                           x         xxx              **     x",
   "  x         x         x        x                                           x                          xx!!!!!x",
   "  x                   xxxxxxxxxx                                           x                        !!!!!!!!!x",
   "  x              o    x!!!!!!!!x                    o                      x                      !!!!!!!!!!!!x",
   "  x              x    x!!!!!!!!x                    x!!x                   x=                 xx!!!!!!!!!!!!!x",
   "  x                   x!!!!!!!!x                   x!!!!x                  x     xxxx     o  xxxx!!!!!xxxxxx!x",
   "  x                   x!!!!!!!!x                   xxxxxx                  xxxxxxx||xxxx  xxxx||xxxxxxx  ||xxx",
   "  x         x         x!!!!!!!!x                                           x                                 x",
   "  x                   x!!!!!!!!x            *                              x            o             o      x",
   "  x                   x!!!!!!!!x                                           x            x             x      x",
   "  x              x    x!!!!!!!!x                                           x                *                x",
   "  x                   x!!!!!!!!x                                           x                                 x",
   "  x         *         x!!!!!!!!x           o                               x                x               xx",
   "  x         x         x!!!!!!!!x        x!!x                               x                                 x",
   "  x                   x!!!!!!!!x       x!!!!x                              x                                 x",
   "  x                   x!!!!!!!!x       xxxxxx                              x                                 x",
   "  x              x    x!!!!!!!!x                                           x    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  x                   x!!!!!!!!x                                           x=        o           o           x",
   "  x         o         x!!!!!!!!x                         *                 x=                                x",
   "  x         x         x!!!!!!!!x                                           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    x",
   "  x                   x!!!!!!!!x                                           x         o           o          =x",
   "  x              *    x!!!!!!!!x                                           x                                =x",
   "  x              x    x!!!!!!!!x                                           x    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  x                   x!!!!!!!!x                                           x=        o           o           x",
   "  x                   x!!!!!!!!x                                           x=                                x",
   "  x         x         x!!!!!!!!x                        x!!x               xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    x",
   "  x                   x!!!!!!!!x                       x!!!!x   o                                            x",
   "  x      @            x!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!x o * o                       o          o       x",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                              "],
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                                                                            x",
   "x                                                      xx                 xx                                 x",
   "x    xx      xx                     xx             xx  xx                 xx                                 x",
   "x    xx      xx                     xx             xx                     xx                                 x",
   "x     xx    xx                      xx             xx      xx  xxx        xx                                 x",
   "x      xxxxxx    xxx   xx  xx       xx     xxx     xx  xx  xx xx xx       xx                                 x",
   "x        xx     xx xx  xx  xx       xx     xxx     xx  xx  xxxx   xx      xx                                 x",
   "x        xx    xx   xx xx  xx        xx   xx xx   xx   xx  xx     xx      xx                                 x",
   "x        xx     xx xx  xx  xx         xx xx   xx xx    xx  xx     xx                                         x",
   "x        xx      xxx    xxxx           xxx     xxx     xx  xx     xx      xx                                 x",
   "x                                                                         oo                                 x",
   "x                                                                         oo                                 x",
   "x  @                                                                      oo                                 x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
