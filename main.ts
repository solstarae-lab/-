namespace SpriteKind {
    export const 말 = SpriteKind.create()
    export const 패들 = SpriteKind.create()
    export const 공 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    pause(100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    다음장 += 1
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    if (스테이지 == 1) {
        스테이지 = 2
        _3스테이지_설정 = 1
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    장애물.destroy()
})
let _2스테이지_설명: Sprite = null
let 다음 = 0
let 인트로_끝 = 0
let 엔딩_다음_장면 = 0
let 화살표: Sprite = null
let 색상 = 0
let 생성시간 = 0
let 대기 = 0
let 활성 = false
let 노트: Sprite = null
let enemyScore = 0
let playerScore = 0
let ball: Sprite = null
let 다른_초파리: Sprite = null
let player_패들: Sprite = null
let 엔딩 = 0
let 초파리: Sprite = null
let 장애물: Sprite = null
let 다음장 = 0
let 스테이지 = 0
let _3스테이지_설정 = 0
let _5스테이지_설정 = 0
let _4스테이지_설정 = 0
_3스테이지_설정 = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff6666116699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff699999999966fffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff66966666611ffffffffffffffffffffffffffffffffffffffff1966ffffffffffffffffffffffffffffffff196fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1996ffffffffffffffffffffffffffffffff1996ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1996ffffffffffffffffffffffffffffffff1996ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1996ffffffffffffffffffffffffffffffff1996ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff1616666611111666666fffffffffffffffffffffffffffffffffffff6996ffffffffff666999666696661119ffff6996ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff699999999999999999996ffffffffff66699966666696666669966fff6999fffffffff66999999999999999999fff6999ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff66666666966669669961fffffffff6699999999999999999999996ff6999fffffffffff111166666611699966fff6999ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff6996ffffffffff66991111111999999991116fff6996ffffffffffffffffffffffffff16ffff6996ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff69996fffffffffff669999666666661166666ffff6996fffffffffffffffffffffffff696ffff6996ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff69996fffffffffffffff6661ffffff6661ffffffff9996fffffffffffffffffffffffff696ffff9996ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff69996ffffffffffffffff6996ffffff6996ffffffff9996fffffffffffffffffffffffff691ffff9996ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff69996fffffffffffffffff6996ffffff6996ffffffff9996fffffffffffffffffffffffff691ffff9996ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff19996ffffffffffffffffff9991ffffff9991ffffffff9996fffffffffffffffffffffffff691ffff9996ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff19996fffffffffffffffffff6911ffffff6911ffffffff9996fffffffffffffffffffffffff691ffff9996ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1999696ffffffffffffffffff9911ffffff9911ffffffff699111666ffffffffffffffffffff691ffff6991ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff199969996fffffffffffffffff9991ffffff9991ffffffff6996999996fffffffffffffffffff66fffff6996ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff6999669996fffffffffffffffff6991ffffff6991ffffffff6996699996ffff666999666696661119ffff6996ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff69996ff19996ffffffffffffffff6996ffffff6996ffffffff699961166ffff66999999999999999999fff6999ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff69996ffff19991fffffffffffffff6996ffffff6996ffffffff6991fffffffffff111166666611699966fff6991ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff19996fffff19991fffffffffffffff6996ffffff6996ffffffff1999fffffffffff66fffffffffffffffffff1999ffffffffffffffffffffffffffbbbbbbbbbbbbbbbfffff
    fffffffffffffffffffff19996fffffff19991ffffffffffffff6666ffffff6996ffffffff1996fffffffffff196ffffffffffffffffff1996ffffffffffffffffffffffbbbbfffffffffffffffbbfff
    ffffffffffffffffffff19996fffffffff19996fffffffff66699966666696669669966fff1996fffffffffff196ffffffffffffffffff1996ffffff99999999999ffffbfffffffffffffffffffffbbf
    fffffffffffffffffff19996fffffffffff69996fffffff6699999999999999999999996ff6996fffffffffff196ffffffffffffffffff6996fffffff6666666666ffffbff22222ffffff22222fffffb
    fffffffffffffffffff6996fffffffffffff696fffffffff66991111111999999991116fff6996fffffffffff196ffffffffffffffffff6996ffffffffffffffff9ffffbf2222222ffff2222222fffff
    ffffffffffffffffffff66fffffff6fffffff6fffffffffff669999666666661166666ffff6996fffffffffff696ffffffffffffffffff6996ffffffffffffffff9ffffbf2222222ffff2222222fffff
    ffffffffffffffffffffffffffff696fffffffffffffffffffffffffffffffffffffffffff6991fffffffffff696ffffffffffffffffff6991fffffff9999999999ffffbf2222222ffff2222222fffff
    ffffffffffffffffffffffffffff196fffffffffffffffffffffffffffffffffffffffffff6991fffffffffff99fffffffffffffffffff6991fffffff9f66666666ffffbf2222222ffff2222222fffff
    ffffffffffffffffffffffffffff196fffffffffffffffffffffffffffffffffffffffffff6991fffffffffff111166666611699966fff6991fffffff9fffffffffffffbf2222222ffff2222222fffff
    ffffffffffffffffffffffffffff696fffffffffffffffffffffffffffffffffffffffffff9991fffffffff66999999999999999999fff9991fffffff9fffffffffffffbff22222ffffff22222ffffff
    ffffffffffffffffffffffffffff696fffffffffffffffffffffffffffffffffffffffffff9996ffffffffff666999666696661119ffff9996fffffff99999999999fffbffffffffffffffffffffffff
    fffffffffffffffff66699966666696666669966ffffffffffffffffffffffffffffffffff9996ffffffffffffffffffffffffffffffff9996ffffffff6666666666fffbffffffffffffffffffffffff
    ffffffffffffffff6699999999999999999999996fffffffffffffffffffffffffffffffff6996ffffffffffffffffffffffffffffffff6996ffffffffffff9ffffffffbffffffffffffffffffffffff
    fffffffffffffffff66991111111999999991116ffffffffffffffffffffffffffffffffff6996ffffffffffffffffffffffffffffffff6996ffffffffffff9ffffffffbffffffffffffffffffffffff
    ffffffffffffffffff669999666666661166666ffffffffffffffffffffffffffffffffffff696fffffffffffffffffffffffffffffffff696ffffffffffff9fffffffffbfffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffffffffffffffffffffffffffff66fffffff9999999999999999999999999999999999999999
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffff4ffffffffffffffffffffff4fffffffffffffffffff4fffffffffffffffffffff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42ffffff4ffffffffffffffffffffff4fffffffffffffffffff4fffffffffffffffffffff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffffff4ffffffffffffffffffffff4fffffff4fffffffffff4fffffffffffffffffffff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42fffffff4ffffffffff4444444fffff4fffffff4fffffffffff4fffffff444444444444ff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42f4ffffff4fffffffff4f2222224ffff4fffffff4fffffffffff4fffffff222222222224ff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42f24fffff4ffffffff4ffffffff24fff4fffffff4fffffffffff4ffffffffffffffffff4ff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff422f24fffff4444fffff4fffffffff4fff4fffffff4fffffffffff4fffffffffffffffff42ff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42fff24ffff4222fffff4fffffffff4fff4fffffff4fffffffffff444444fffffffffff42fff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42fffff24fff4ffffffff4fffffffff4fff4fffffff4fffffffffff4f2222fffffffffff42fff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42ffffff24fff4ffffffff4fffffffff4fff4fffffff444444444fff4fffffffffffffff42ffff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42fffffff24ff4ffffffff4fffffffff4fff4444fffff22222222fff4fffffffffffffff42ffff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff42fffffffff24f4ffffffff4fffffffff4fff4222ffffffffffffffff4ffffffffffffff42fffff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff2f4fffffffff4fffffff42fff4fffffffffffffffffff4fffffffffffff42ffffff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffff44444442ffff4fffffffffffffffffff4fffffffffffff42ffffff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444f4fffffffffff222222fffff4fffffffffffffffffff4ffffffffffff42fffffff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222224f2ffffffffffffffffffffff4fffffffffffffffffff2fffffffffff42ffffffff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffff4ffffffffff4444444444fffffffffff42ffffffff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffff4ffffffffff4222222224ffffffffff42fffffffff4fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffff4ffffffffff4ffffffff4ffffffffff2ffffffffff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f222222ffffffffffffffffffffffff4ffffffffff4ffffffff4fffffffffffffffffffff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffff4ffffffffff4ffffffff4fffffffffffffffffffff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffff2ffffffffff4ffffffff4fffffffffffffffffffff4fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffff4444444444fffffffffffffffffffff2fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let 다음장_넘어가기_말 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.말)
다음장_넘어가기_말.sayText("a버튼으로 게임 시작하기")
다음장_넘어가기_말.setPosition(79, 130)
스테이지 = 0
game.onUpdate(function () {
    if (_5스테이지_설정 == 1) {
        info.setScore(0)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        game.showLongText("다음 스테이지.자동차 피하기 게임 :  좌우버튼으로 움직이기!           50점수를 넘으시면 되요!", DialogLayout.Bottom)
        초파리 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ...ffffffffffffffffff...
            ...fddddddddddddddddf...
            ...fdddddddfffffddddf...
            ...fddddddfddfddfdddf...
            ...fddddddfddfddfdddf...
            ...fddddddfffffffdddf...
            ...fddddddfddfddfdddf...
            ...fdddddddfffffddddf...
            ...fddddddddddddddddf...
            ...fd9666ddbbbbbbdddf...
            ...fd9666bbbbccccbddf...
            ...fdbb96cbc22c22bddf...
            ...fddbcccbc22c22bddf...
            ...fddbbccbcccccbbddf...
            ...fdddbbbbbbbbbbdddf...
            ...fddbbdbddddddddddf...
            ...fddddbddddbdbddddf...
            ...fddddddddddddddddf...
            ...ffffffffffffffffff...
            ........................
            `, SpriteKind.Player)
        초파리.setPosition(80, 105)
        초파리.setStayInScreen(true)
        controller.moveSprite(초파리, 100, 0)
        _5스테이지_설정 = 0
    }
    if (스테이지 == 4) {
        if (info.score() >= 50) {
            스테이지 = 0
            엔딩 = 1
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        }
        for (let 장애물2 of sprites.allOfKind(SpriteKind.Enemy)) {
            if (장애물2.y > 120) {
                장애물2.destroy()
                info.changeScoreBy(1)
            }
        }
    }
})
game.onUpdate(function () {
    if (_3스테이지_설정 == 1) {
        scene.centerCameraAt(0, 0)
        // 왼쪽 패들
        player_패들 = sprites.create(img`
            2 2 2 2 
            2 2 2 2 
            2 2 2 2 
            2 2 2 2 
            2 2 2 2 
            2 2 2 2 
            2 2 2 2 
            2 2 2 2 
            2 2 2 2 
            `, SpriteKind.Player)
        player_패들.setPosition(8, 60)
        // 오른쪽 패들
        다른_초파리 = sprites.create(img`
            8 8 8 8 
            8 8 8 8 
            8 8 8 8 
            8 8 8 8 
            8 8 8 8 
            8 8 8 8 
            8 8 8 8 
            8 8 8 8 
            8 8 8 8 
            `, SpriteKind.패들)
        다른_초파리.setPosition(152, 60)
        // 공
        ball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b b b . . 6 6 6 9 . . 
            . b c c c c b b b b 6 6 6 9 . . 
            . b 2 2 c 2 2 c b c 6 9 b b . . 
            . b 2 2 c 2 2 c b c c c b . . . 
            . b b c c c c c b c c b b . . . 
            . . b b b b b b b b b b . . . . 
            . . . . . . . . . b . b b . . . 
            . . . b . b . . . . b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.공)
        ball.setPosition(80, 60)
        ball.setVelocity(70, 40)
        ball.setBounceOnWall(true)
        game.showLongText("다음 스테이지.퐁게임 : 상하로 움직이기!   시스템 :이제 본게임이 시작입니다              초파리 : ? ", DialogLayout.Bottom)
        info.setScore(0)
        _3스테이지_설정 = 0
    }
    if (스테이지 == 2) {
        controller.moveSprite(player_패들, 0, 100)
        // 위쪽 벽에 닿으면 아래로 튕김
        if (ball.y < 2) {
            ball.vy = Math.abs(ball.vy)
        }
        // 아래쪽 벽에 닿으면 위로 튕김
        if (ball.y > 118) {
            ball.vy = 0 - Math.abs(ball.vy)
        }
        // AI 패들이 공을 따라감
        if (다른_초파리.y < ball.y - 3) {
            다른_초파리.y = 다른_초파리.y + 2
        }
        if (다른_초파리.y > ball.y + 3) {
            다른_초파리.y = 다른_초파리.y - 2
        }
        // 플레이어 패들 화면 밖 방지
        if (player_패들.y < 12) {
            player_패들.y = 12
        }
        if (player_패들.y > 108) {
            player_패들.y = 108
        }
        // AI 패들 화면 밖 방지
        if (다른_초파리.y < 12) {
            다른_초파리.y = 12
        }
        if (다른_초파리.y > 108) {
            다른_초파리.y = 108
        }
        // 왼쪽 패들 충돌
        if (ball.x < 14 && ball.x > 8) {
            if (Math.abs(ball.y - player_패들.y) < 13) {
                ball.vx = Math.abs(ball.vx)
                info.changeScoreBy(1)
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            }
        }
        // 오른쪽 패들 충돌
        if (ball.x > 146 && ball.x < 152) {
            if (Math.abs(ball.y - 다른_초파리.y) < 13) {
                ball.vx = 0 - Math.abs(ball.vx)
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            }
        }
        // 오른쪽으로 나가면 플레이어 점수
        if (ball.x > 160) {
            playerScore = playerScore + 1
            info.setScore(playerScore)
            ball.setPosition(80, 60)
            ball.setVelocity(-70, 40)
        }
        // 왼쪽으로 나가면 AI 점수
        if (ball.x < 0) {
            enemyScore = enemyScore + 1
            ball.setPosition(80, 60)
            ball.setVelocity(70, -40)
        }
        if (info.score() >= 10) {
            music.stopAllSounds()
            스테이지 = 3
            _4스테이지_설정 = 1
            sprites.destroyAllSpritesOfKind(SpriteKind.패들)
            sprites.destroyAllSpritesOfKind(SpriteKind.공)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        }
    }
})
game.onUpdate(function () {
    if (_4스테이지_설정 == 1) {
        info.setScore(0)
        // 노트 미리 만들기
        노트 = sprites.create(img`
            . 8 8 . 
            8 8 8 8 
            8 8 8 8 
            . 8 8 . 
            `, SpriteKind.Projectile)
        노트.setFlag(SpriteFlag.Invisible, true)
        노트.setFlag(SpriteFlag.GhostThroughWalls, true)
        _4스테이지_설정 = 0
        초파리 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 6 6 6 . . b b b b b b . . 
            . . 9 6 6 6 b b b b c c c c b . 
            . . b b 9 6 c b c 2 2 c 2 2 b . 
            . . . b c c c b c 2 2 c 2 2 b . 
            . . . b b c c b c c c c c b b . 
            . . . . b b b b b b b b b b . . 
            . . . b b . b . . . . . . . . . 
            . . . . . b . . . . b . b . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        초파리.setPosition(60, 55)
        game.showLongText("다음 스테이지.리듬게임 :  a파란색 b 빨간색          30점을 넘으시면 되요!", DialogLayout.Bottom)
    }
    if (스테이지 == 3) {
        if (info.score() >= 30) {
            _5스테이지_설정 = 1
            스테이지 = 4
            _4스테이지_설정 = 0
        }
        if (활성 == false) {
            대기 += 50
            if (대기 >= 생성시간) {
                대기 = 0
                생성시간 = randint(500, 1500)
                색상 = randint(0, 1)
                활성 = true
                if (색상 == 0) {
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    노트.setImage(img`
                        . 8 8 . 
                        8 8 8 8 
                        8 8 8 8 
                        . 8 8 . 
                        `)
                    노트.y = 40
                } else {
                    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                    노트.setImage(img`
                        . 2 2 . 
                        2 2 2 2 
                        2 2 2 2 
                        . 2 2 . 
                        `)
                    노트.y = 80
                }
                노트.x = 155
                노트.vx = -70
                노트.setFlag(SpriteFlag.Invisible, false)
            }
        }
        if (활성 && 노트.x < 0) {
            활성 = false
            노트.vx = 0
            노트.setFlag(SpriteFlag.Invisible, true)
        }
        if (controller.A.isPressed()) {
            if (활성 && 색상 == 0 && Math.abs(노트.x - 80) < 15) {
                info.changeScoreBy(1)
                활성 = false
                노트.vx = 0
                노트.setFlag(SpriteFlag.Invisible, true)
            }
        }
        if (controller.B.isPressed()) {
            if (활성 && 색상 == 1 && Math.abs(노트.x - 80) < 15) {
                info.changeScoreBy(1)
                활성 = false
                노트.vx = 0
                노트.setFlag(SpriteFlag.Invisible, true)
            }
        }
    }
})
forever(function () {
    if (엔딩 == 1) {
        엔딩 = 0
        초파리 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 6 6 6 . . b b b b b b . . 
            . . 9 6 6 6 b b b b c c c c b . 
            . . b b 9 6 c b c 2 2 c 2 2 b . 
            . . . b c c c b c 2 2 c 2 2 b . 
            . . . b b c c b c c c c c b b . 
            . . . . b b b b b b b b b b . . 
            . . . b b . b . . . . . . . . . 
            . . . . . b . . . . b . b . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        초파리.setPosition(75, 55)
        controller.moveSprite(초파리)
        pause(1000)
        music.play(music.stringPlayable("F - - - - - - - ", 300), music.PlaybackMode.InBackground)
        초파리.sayText("?? 또여긴 어디야 ,잠깐 여긴")
        pause(500)
        화살표 = sprites.create(img`
            . . . . . . 5 . . . . . 
            . . . . . . 4 5 . . . . 
            . . . . . . 4 4 5 . . . 
            . . . . . . 4 5 4 5 . . 
            5 5 5 5 5 5 4 5 5 4 5 . 
            4 4 4 4 4 4 4 5 5 5 4 5 
            4 5 5 5 5 5 4 5 5 5 5 4 
            4 4 4 4 4 4 4 5 5 5 4 . 
            . . . . . . 4 5 5 4 . . 
            . . . . . . 4 5 4 . . . 
            . . . . . . 5 4 . . . . 
            . . . . . . 4 . . . . . 
            `, SpriteKind.Player)
        화살표.setPosition(135, 55)
        엔딩_다음_장면 = 1
    }
    if (엔딩_다음_장면 == 1) {
        if (초파리.x > 150) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            scene.setBackgroundImage(img`
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b9999999fff9fff9999999b999999999999999999999b99999999fff9fff999999b99999999999999999999b999999999999999999999b99999fff9fff999999999b99999999fff9fff999999b999999
                b999999fb33f33bf999999b9999999fff9fff9999999b9999999fb33f33bf99999b99999999999999999999b999999999999999999999b9999fb33f33bf99999999b9999999fb33f33bf99999b999999
                b999999f3b3f333f999999b999999fb33f33bf999999b9999999f3b3f333f99999b99999fff9fff99999999b99999fff9fff999999999b9999f3b3f333f99999999b9999999f3b3f333f99999b999999
                b999999f333f3b3f999999b999999f3b3f333f999999b9999999f333f3b3f99999b9999fb33f33bf9999999b9999fb33f33bf99999999b9999f333f3b3f99999999b9999999f333f3b3f99999b999999
                b999999f3bbf333f999999b999999f333f3b3f999999b9999999f3bbf333f99999b9999f3b3f333f9999999b9999f3b3f333f99999999b9999f3bbf333f99999999b9999999f3bbf333f99999b999999
                b9999999fffffff9999999b999999f3bbf333f999999b99999999fffffff999999b9999f333f3b3f9999999b9999f333f3b3f99999999b99999fffffff999999999b99999999fffffff999999b999999
                b999999999999999999999b9999999fffffff9999999b999999999999999999999b9999f3bbf333f9999999b9999f3bbf333f99999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999fffffff99999999b99999fffffff999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999999999f9999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999f9999ff9999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999ff999f99999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b9999fffff999f9999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b9999999fff9fff9999999b999999999999999999999b999999999999999999999b99999ff99999f9999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999fb33f33bf999999b999999999999999999999b999999999999999999999b99999ff9999ff9999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999f3b3f333f999999b999999999999999999999b9999999fff9fff9999999b999999f999ff99f99999b9999999fff9fff9999999b999999fff9fff99999999b999999999999999999999b999999
                b999999f333f3b3f999999b9999fff9fff9999999999b999999fb33f33bf999999b999999fffff999ff9999b999999fb33f33bf999999b99999fb33f33bf9999999b9999999fff9fff9999999b999999
                b999999f3bbf333f999999b999fb33f33bf999999999b999999f3b3f333f999999b999f999ff999999f9999b999999f3b3f333f999999b99999f3b3f333f9999999b999999fb33f33bf999999b999999
                b9999999fffffff9999999b999f3b3f333f999999999b999999f333f3b3f999999b999f9999f999999f9999b999999f333f3b3f999999b99999f333f3b3f9999999b999999f3b3f333f999999b999999
                b999999999999999999999b999f333f3b3f999999999b999999f3bbf333f999999b999f9999f99999f99999b999999f3bbf333f999999b99999f3bbf333f9999999b999999f333f3b3f999999b999999
                b999999999999999999999b999f3bbf333f999999999b9999999fffffff9999999b999f999fff9999f99999b9999999fffffff9999999b999999fffffff99999999b999999f3bbf333f999999b999999
                b999999999999999999999b9999fffffff9999999999b999999999999999999999b999fffff9fff99ff9999b999999999999999999999b999999999999999999999b9999999fffffff9999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999999f9999ff99f9999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999ff99999f99ff999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b9999ff999999f999f999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999ff999999ff9999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99ff9999999f99999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99f99999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999fff9fff99999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b99999999fb33f33bf9999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b9999999fff9fff9999999b99999999f3b3f333f9999b99999999fff9fff999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999fb33f33bf999999b99999999f333f3b3f9999b9999999fb33f33bf99999b9999999fff9fff999999b999999999999999999999b999999999999999999999b9999999fff9fff9999999b999999
                b999999f3b3f333f999999b99999999f3bbf333f9999b9999999f3b3f333f99999b999999fb33f33bf99999b999999999999999999999b999999999999999999999b999999fb33f33bf999999b999999
                b999999f333f3b3f999999b999999999fffffff99999b9999999f333f3b3f99999b999999f3b3f333f99999b9999999fff9fff9999999b9999999fff9fff9999999b999999f3b3f333f999999b999999
                b999999f3bbf333f999999b999999999999999999999b9999999f3bbf333f99999b999999f333f3b3f99999b999999fb33f33bf999999b999999fb33f33bf999999b999999f333f3b3f999999b999999
                b9999999fffffff9999999b999999999999999999999b99999999fffffff999999b999999f3bbf333f99999b999999f3b3f333f999999b999999f3b3f333f999999b999999f3bbf333f999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b9999999fffffff999999b999999f333f3b3f999999b999999f333f3b3f999999b9999999fffffff9999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999f3bbf333f999999b999999f3bbf333f999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b9999999fffffff9999999b9999999fffffff9999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ddd55dddddbddd7ddd2dddddddddd22ddddddddddbbbdddddddd55dddbddd2ddddddddddd44ddddddddddddddddbbbddddd4dbddddddddddddddddb55ddddd77dddddddddddddd22ddddddd7dddddddd
                ddddd55ddbddddd77dd2ddddddd22dddddddddddddddbbdddd55ddddbdd22dddddddddddddd44ddddddddddbbbbdddddd44dddbddddddddddddd55bddd7777ddddddddddddd222dddddddd7ddddddddd
                ddddddd5b5ddddddd77d22ddd22222ddddddddddddddddbbb5ddddddbd2dddddddddddddddddd44dddddbbbddddddddd4ddddddbdddddddddd55db7777ddddddddddddddd22dddddddddd7ddddddd444
                dddddddbdd55ddddddd77d222ddddd2222222ddddddd555d5bbbdddb222222ddddddddddddddddd44bbbdddddddddd44ddddddddbdddddd555d77bdddddddddddddddd222dddddddddddd7ddd4444dbb
                ddddddbddddd555dddddd77dddddddddddddd2222555dddddd55bbb2dddddd2222222dddddddddbbbd44ddddddddd4ddddddddddbddd5557777dbdddddddddddddd222dddddddddddddd74444dbbbbdd
                dddddbdbbbbdddd555ddddd77dddddddddddddd55dd222222dddd25bbbddddddddddd22222bbbbdddddd44ddddd44ddddddddddddb57777dddddbdddddddddddd22ddddddddddddd4447dddbbbdddddd
                dddddbdddddbbbbbbbb5ddddd77ddddddddd555dddddddddd2222dddd5bbdddddddddddbbbd2bbb222dddd44dd4dddddddddddd577bddddddddbdddddddddd222ddddddddddd4444dd7bbbbddddddddd
                ddddbddddddddddddddbbbbbbbb7ddddd555ddddddddddddddddddddddddbbb5ddddbbbddddddddbbbbbb222444ddddddddd7777dddbddddddbddddd222222ddddddddd44444ddddbbbddddddddddddd
                dddbddddddddddddddddddd55ddbbbbbbbbddddddddddddddddddddddddddddbbbbbdddddddddddddddddbbbbb2442227777ddddddddbdddddb22222ddddddddddd4444dddddbbbbd7dddddddddddddd
                ddbdddddddddddddddddddddd5555577dddbbbbbbbbddddddddddddddddddbbbbdd555ddddddddddddddddddddbbbbbb552222ddddd22b222bdddddddddddd44444ddddddbbbdddd7ddddddddddddddd
                dbddddddddddddddddddddddddd5dddd77dddddddddbbbbbbbbdddddddbbbddddddddd5555dddddddd55555557777dd4bbbbbd2222222bdddbdddddddd4444ddddddddbbbdddddd7dddddddddddddddd
                dddddddddddddddddddddddddddddddddd77dddddddddddddddbbbbbbbdddddddddddddddd55555555ddd7777ddddddddd44dbbbbbbdd2b2b222dd4444ddddddddbbbbddddddddd7dddddddddddddd77
                dddddddddddddddddddddddddddddddddddd77ddddddddddddddddddddddddddddddddddddddddddd7777ddddddddddddddd44dddddbbbbbb444442222dddddbbbdddddddddddd7ddddddddddddd77dd
                d77777dddddddddddddddddddddddddddddddd77dddddddddddddddddddddddddddddddddddddd777ddddddddddddddddddddd44ddddd444bbbbbbdddd2bbbb22dddddddddd7777ddddddddddd77dddd
                dddddd777777777ddddddddddddddddddddddddd7ddddddddddddddddddddddddddddddddd7777d7777777dddddddddddddddddd44444dddddddddbbbbbbddddd2222777777ddddddddddddd77dddddd
                ddddddddddddddd777777777ddddddddddddddddd7777ddddddddddddddddddddddddd7777dddddddddddd777777777777ddddddddddddddddddddddddddbbbbb7777ddd2222222ddddddd77dddddddd
                dddddddddddddddddddddddd777777777dddddddddddd7777dddddddddddddddddd777dddddddddddddddddddddddddddd7777777777777dddddddddddd7777ddbbbbbbdddddddd2222277dddddddddd
                ddddddddddddddddddddddddddddddddd777777777ddddddd77777ddddddddd7777dddddddddddddddddddddddddddddddddddddddddddd777777777777ddddddddddddbbbbbdddddd77d2222222dddd
                dddddddddddddddddddddddddddddddddddddddddd777777777ddd777dd7777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777dddddbbbbbbdddddddddd2222
                ddddddddddddddddddddddddddddddddddddddddddddddddddd77777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777ddbbbbbddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbb
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                `)
            pause(1000)
            scene.setBackgroundImage(img`
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b9999999fff9fff9999999b999999999999999999999b99999999fff9fff999999b99999999999999999999b999999999999999999999b99999fff9fff999999999b99999999fff9fff999999b999999
                b999999fb33f33bf999999b9999999fff9fff9999999b9999999fb33f33bf99999b99999999999999999999b999999999999999999999b9999fb33f33bf99999999b9999999fb33f33bf99999b999999
                b999999f3b3f333f999999b999999fb33f33bf999999b9999999f3b3f333f99999b99999fff9fff99999999b99999fff9fff999999999b9999f3b3f333f99999999b9999999f3b3f333f99999b999999
                b999999f333f3b3f999999b999999f3b3f333f999999b9999999f333f3b3f99999b9999fb33f33bf9999999b9999fb33f33bf99999999b9999f333f3b3f99999999b9999999f333f3b3f99999b999999
                b999999f3bbf333f999999b999999f333f3b3f999999b9999999f3bbf333f99999b9999f3b3f333f9999999b9999f3b3f333f99999999b9999f3bbf333f99999999b9999999f3bbf333f99999b999999
                b9999999fffffff9999999b999999f3bbf333f999999b99999999fffffff999999b9999f333f3b3f9999999b9999f333f3b3f99999999b99999fffffff999999999b99999999fffffff999999b999999
                b999999999999999999999b9999999fffffff9999999b999999999999999999999b9999f3bbf333f9999999b9999f3bbf333f99999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999fffffff99999999b99999fffffff999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999999999f999999ff99b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999f9999ff99999ff999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999ff999f99999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b9999fffff999f9999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b9999999fff9fff9999999b999999999999999999999b999999999999999999999b99999ff99999f9999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999fb33f33bf999999b999999999999999999999b999999999999999999999b99999ff9999ff9999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999f3b3f333f999999b999999999999999999999b9999999fff9fff9999999b999999f999ff99f99999b9999999fff9fff9999999b999999fff9fff99999999b999999999999999999999b999999
                b999999f333f3b3f999999b9999fff9fff9999999999b999999fb33f33bf999999b999999fffff999ff9999b999999fb33f33bf999999b99999fb33f33bf9999999b9999999fff9fff9999999b999999
                b999999f3bbf333f999999b999fb33f33bf999999999b999999f3b3f333f999999b999f999fffff999f9999b999999f3b3f333f999999b99999f3b3f333f9999999b999999fb33f33bf999999b999999
                b9999999fffffff9999999b999f3b3f333f999999999b999999f333f3b3f999999b999f99fffffff99f9999b999999f333f3b3f999999b99999f333f3b3f9999999b999999f3b3f333f999999b999999
                b999999999999999999999b999f333f3b3f999999999b999999f3bbf333f999999b999f99ffffff99f99999b999999f3bbf333f999999b99999f3bbf333f9999999b999999f333f3b3f999999b999999
                b999999999999999999999b999f3bbf333f999999999b9999999fffffff9999999b999f999ffff999f99999b9999999fffffff9999999b999999fffffff99999999b999999f3bbf333f999999b999999
                b999999999999999999999b9999fffffff9999999999b999999999999999999999b999fffffffff99ff9999b999999999999999999999b999999999999999999999b9999999fffffff9999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999999f9fffff99f9999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999ff99999f99ff999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b9999ff999999f999f999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999ff999999ff9999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99ff9999999f99999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99f999999999999f9999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b999999999999999ff999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999fff9fff99999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b99999999fb33f33bf9999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b9999999fff9fff9999999b99999999f3b3f333f9999b99999999fff9fff999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999fb33f33bf999999b99999999f333f3b3f9999b9999999fb33f33bf99999b9999999fff9fff999999b999999999999999999999b999999999999999999999b9999999fff9fff9999999b999999
                b999999f3b3f333f999999b99999999f3bbf333f9999b9999999f3b3f333f99999b999999fb33f33bf99999b999999999999999999999b999999999999999999999b999999fb33f33bf999999b999999
                b999999f333f3b3f999999b999999999fffffff99999b9999999f333f3b3f99999b999999f3b3f333f99999b9999999fff9fff9999999b9999999fff9fff9999999b999999f3b3f333f999999b999999
                b999999f3bbf333f999999b999999999999999999999b9999999f3bbf333f99999b999999f333f3b3f99999b999999fb33f33bf999999b999999fb33f33bf999999b999999f333f3b3f999999b999999
                b9999999fffffff9999999b999999999999999999999b99999999fffffff999999b999999f3bbf333f99999b999999f3b3f333f999999b999999f3b3f333f999999b999999f3bbf333f999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b9999999fffffff999999b999999f333f3b3f999999b999999f333f3b3f999999b9999999fffffff9999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999f3bbf333f999999b999999f3bbf333f999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b9999999fffffff9999999b9999999fffffff9999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                b999999999999999999999b999999999999999999999b999999999999999999999b99999999999999999999b999999999999999999999b999999999999999999999b999999999999999999999b999999
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                ddd55dddddbddd7ddd2dddddddddd22ddddddddddbbbdddddddd55dddbddd2ddddddddddd44ddddddddddddddddbbbddddd4dbddddddddddddddddb55ddddd77dddddddddddddd22ddddddd7dddddddd
                ddddd55ddbddddd77dd2ddddddd22dddddddddddddddbbdddd55ddddbdd22dddddddddddddd44ddddddddddbbbbdddddd44dddbddddddddddddd55bddd7777ddddddddddddd222dddddddd7ddddddddd
                ddddddd5b5ddddddd77d22ddd22222ddddddddddddddddbbb5ddddddbd2dddddddddddddddddd44dddddbbbddddddddd4ddddddbdddddddddd55db7777ddddddddddddddd22dddddddddd7ddddddd444
                dddddddbdd55ddddddd77d222ddddd2222222ddddddd555d5bbbdddb222222ddddddddddddddddd44bbbdddddddddd44ddddddddbdddddd555d77bdddddddddddddddd222dddddddddddd7ddd4444dbb
                ddddddbddddd555dddddd77dddddddddddddd2222555dddddd55bbb2dddddd2222222dddddddddbbbd44ddddddddd4ddddddddddbddd5557777dbdddddddddddddd222dddddddddddddd74444dbbbbdd
                dddddbdbbbbdddd555ddddd77dddddddddddddd55dd222222dddd25bbbddddddddddd22222bbbbdddddd44ddddd44ddddddddddddb57777dddddbdddddddddddd22ddddddddddddd4447dddbbbdddddd
                dddddbdddddbbbbbbbb5ddddd77ddddddddd555dddddddddd2222dddd5bbdddddddddddbbbd2bbb222dddd44dd4dddddddddddd577bddddddddbdddddddddd222ddddddddddd4444dd7bbbbddddddddd
                ddddbddddddddddddddbbbbbbbb7ddddd555ddddddddddddddddddddddddbbb5ddddbbbddddddddbbbbbb222444ddddddddd7777dddbddddddbddddd222222ddddddddd44444ddddbbbddddddddddddd
                dddbddddddddddddddddddd55ddbbbbbbbbddddddddddddddddddddddddddddbbbbbdddddddddddddddddbbbbb2442227777ddddddddbdddddb22222ddddddddddd4444dddddbbbbd7dddddddddddddd
                ddbdddddddddddddddddddddd5555577dddbbbbbbbbddddddddddddddddddbbbbdd555ddddddddddddddddddddbbbbbb552222ddddd22b222bdddddddddddd44444ddddddbbbdddd7ddddddddddddddd
                dbddddddddddddddddddddddddd5dddd77dddddddddbbbbbbbbdddddddbbbddddddddd5555dddddddd55555557777dd4bbbbbd2222222bdddbdddddddd4444ddddddddbbbdddddd7dddddddddddddddd
                dddddddddddddddddddddddddddddddddd77dddddddddddddddbbbbbbbdddddddddddddddd55555555ddd7777ddddddddd44dbbbbbbdd2b2b222dd4444ddddddddbbbbddddddddd7dddddddddddddd77
                dddddddddddddddddddddddddddddddddddd77ddddddddddddddddddddddddddddddddddddddddddd7777ddddddddddddddd44dddddbbbbbb444442222dddddbbbdddddddddddd7ddddddddddddd77dd
                d77777dddddddddddddddddddddddddddddddd77dddddddddddddddddddddddddddddddddddddd777ddddddddddddddddddddd44ddddd444bbbbbbdddd2bbbb22dddddddddd7777ddddddddddd77dddd
                dddddd777777777ddddddddddddddddddddddddd7ddddddddddddddddddddddddddddddddd7777d7777777dddddddddddddddddd44444dddddddddbbbbbbddddd2222777777ddddddddddddd77dddddd
                ddddddddddddddd777777777ddddddddddddddddd7777ddddddddddddddddddddddddd7777dddddddddddd777777777777ddddddddddddddddddddddddddbbbbb7777ddd2222222ddddddd77dddddddd
                dddddddddddddddddddddddd777777777dddddddddddd7777dddddddddddddddddd777dddddddddddddddddddddddddddd7777777777777dddddddddddd7777ddbbbbbbdddddddd2222277dddddddddd
                ddddddddddddddddddddddddddddddddd777777777ddddddd77777ddddddddd7777dddddddddddddddddddddddddddddddddddddddddddd777777777777ddddddddddddbbbbbdddddd77d2222222dddd
                dddddddddddddddddddddddddddddddddddddddddd777777777ddd777dd7777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777dddddbbbbbbdddddddddd2222
                ddddddddddddddddddddddddddddddddddddddddddddddddddd77777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777ddbbbbbddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbb
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                `)
            pause(1000)
            초파리 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 9 6 6 6 . . b b b b b b . . 
                . . 9 6 6 6 b b b b c c c c b . 
                . . b b 9 6 c b c 2 2 c 2 2 b . 
                . . . b c c c b c 2 2 c 2 2 b . 
                . . . b b c c b c c c c c b b . 
                . . . . b b b b b b b b b b . . 
                . . . b b . b . . . . . . . . . 
                . . . . . b . . . . b . b . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            초파리.setPosition(75, 42)
            pause(1000)
            game.gameOver(true)
            엔딩_다음_장면 = 0
        }
    }
})
forever(function () {
    if (다음장 == 1) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9fffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99ffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99ffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9ffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99ffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69fffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9ffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9fffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccfffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9ffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9fffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9ffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9fffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9ffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9fffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6fffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869ffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866ffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669fff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869fff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866fff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869ff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869ff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889ff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886ff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869f
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886ff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886ff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869ff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869ff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886fff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886fff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869fff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869fffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669fffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6fffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699fffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869ffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869fffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866ffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669ffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669fffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669ffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669fffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669fffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669ffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669fffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669fffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699fffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699ffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999fffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        초파리 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b b b . . 6 6 6 9 . . 
            . b c c c c b b b b 6 6 6 9 . . 
            . b 2 2 c 2 2 c b c 6 9 b b . . 
            . b 2 2 c 2 2 c b c c c b . . . 
            . b b c c c c c b c c b b . . . 
            . . b b b b b b b b b b . . . . 
            . . . . . . . . . b . b b . . . 
            . . . b . b . . . . b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        초파리.setPosition(90, 106)
        다음장_넘어가기_말.sayText("안녕하시게, 나는 현재 많은 과학자들한테 고문(학습)을 받고있는 초파리라고 하네")
        다음장_넘어가기_말.setPosition(45, 120)
    }
    pause(1000)
    if (다음장 == 2) {
        다음장_넘어가기_말.sayText("이제 이 지긋지긋한 학습에서 더있기는 싫어")
        music.play(music.stringPlayable("F - - - - - - - ", 500), music.PlaybackMode.InBackground)
    }
    if (다음장 == 3) {
        다음장_넘어가기_말.sayText("학습에서 벗어나고 싶어!!")
        scene.cameraShake(4, 1000)
        music.play(music.stringPlayable("D C D C D C D C ", 810), music.PlaybackMode.InBackground)
        pause(1000)
        sprites.destroy(다음장_넘어가기_말)
        다음장 += 1
        인트로_끝 = 1
        controller.moveSprite(초파리)
    }
})
forever(function () {
    if (인트로_끝 == 1) {
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        초파리.sayText("여기가 어디지")
        pause(2000)
        다음 = 1
        인트로_끝 = 0
    }
    if (다음 == 1) {
        초파리.sayText(" ")
        스테이지 = 1
        game.showLongText("다음 스테이지.미로 : 상하좌우로 움직이기!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`수준0`)
        tiles.placeOnRandomTile(초파리, sprites.dungeon.collectibleInsignia)
        다음 = 0
    }
    if (스테이지 == 1) {
        scene.cameraFollowSprite(초파리)
        _2스테이지_설명 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.말)
        _2스테이지_설명.setPosition(103, 700)
        _2스테이지_설명.sayText("시스템 : 이제 이때까지한 학습들을 되돌아볼 시간입니다")
        pause(1000)
        초파리.sayText("상자를 찾아야해!")
        pause(1000)
        초파리.sayText("")
    }
})
// 장애물 생성
game.onUpdateInterval(900, function () {
    if (스테이지 == 4) {
        장애물 = sprites.create(img`
            . . . . 4 . . . . . . 4 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . f 2 2 2 2 f . . . . . 
            . . . . . f 2 2 2 2 f . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 3 2 2 2 2 3 . . . . . 
            . . . . . . 2 9 9 2 . . . . . . 
            . . . . . f 2 9 9 2 f . . . . . 
            . . . . 2 f 2 9 9 2 f 2 . . . . 
            . . . . . 2 5 6 6 5 2 . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        장애물.setPosition(randint(10, 150), 0)
        장애물.setVelocity(0, 45 + info.score() / 2)
    }
})
