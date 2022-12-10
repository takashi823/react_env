/**
 * 各種モジュールのインストール
*/
import React from 'react'

// FullCalendarコンポーネント。
import FullCalendar from '@fullcalendar/react'

// FullCalendarで週表示を可能にするモジュール。
import timeGridPlugin from '@fullcalendar/timegrid'

// FullCalendarで月表示を可能にするモジュール。
import dayGridPlugin from '@fullcalendar/daygrid'

// FullCalendarで日付や時間が選択できるようになるモジュール。
import interactionPlugin from '@fullcalendar/interaction'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const Calendar: React.FC = props => {

  return (
    <div>
          <AppBar position="relative" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Grid>
            <LocalPrintshopRoundedIcon></LocalPrintshopRoundedIcon>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="未入力あり表示" />
            </FormGroup>

            <Stack direction="row" spacing={1}>
                <IconButton aria-label="secondary">日</IconButton>
                <IconButton aria-label="secondary">週</IconButton>
                <IconButton aria-label="secondary">月</IconButton>
                <IconButton aria-label="secondary">
                <Button variant="contained"sx={{borderRedius:"50px"}}>週</Button>
                <CalendarMonthIcon></CalendarMonthIcon>
                今日を表示
                </IconButton>
            </Stack>
          </Grid>

        </Toolbar>
      </Container>
    </AppBar>

      <FullCalendar
        locale="ja"　// ロケール設定。
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]} // 週表示、月表示、日付等のクリックを可能にするプラグインを設定。
        initialView="timeGridWeek" // カレンダーの初期表示設定。この場合、週表示。
        slotDuration="00:30:00"　// 週表示した時の時間軸の単位。
        selectable={true} // 日付選択を可能にする。interactionPluginが有効になっている場合のみ。
        businessHours={{ // ビジネス時間の設定。
          daysOfWeek: [1, 2, 3, 4, 5], // 0:日曜 〜 7:土曜
          startTime: '00:00',
          endTIme: '24:00'
        }}

        weekends={true} // 週末を強調表示する。
        titleFormat={{ // タイトルのフォーマット。(詳細は後述。※1)
          year: '2-digit',
          month: 'short',
        }}

        headerToolbar={false}
      />

    </div>
  )
};
