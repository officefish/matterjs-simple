# движок
timeScale - скорость работы приложения

# мир
gravityScale -сила ускорения гравитации
gravityX - горизотнальная гравитация (ветер)
gravityY - вертикальная гравитация

# поле
gap - расстояние между брусками в одной линии
spacing - расстояние между линиями

# брусок
pegRadius - радиус бруска
pegFriction - скольжение бруска (0 - нет, 1 - максимальное, дробь - промежуточное значение)
pegRestitution - упругость бруска (0 - нет, 1 - максимальное, дробь - промежуточное значение)
  
# шарик
ballRadius - радиус шарика
ballFriction - скольжение шарика (0 - нет, 1 - максимальное, дробь - промежуточное значение)
ballRestitution - упругость шарика (0 - нет, 1 - максимальное, дробь - промежуточное значение)
ballDensity - масса шарика

# соприкосновение шарика и бруска
forceMagnitude - магнитизм шага (насколько сильно тянет влево или вправо, при касании) 
velocity - насколько сильно сбрасываются все действующие силы (0.1 значит что остается 10% от действующих сил и т.д.)
angularVelocity - насколько сильно сбрасывается вращение (0.1 значит что остается 10% от действующих сил и т.д.)