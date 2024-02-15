package com.fastcampus.fcboard

import com.p6spy.engine.logging.Category
import com.p6spy.engine.spy.P6SpyOptions
import com.p6spy.engine.spy.appender.MessageFormattingStrategy
import jakarta.annotation.PostConstruct
import org.apache.commons.lang3.StringUtils
import org.hibernate.engine.jdbc.internal.FormatStyle
import org.springframework.context.annotation.Configuration
import java.util.*

@Configuration
class P6SpyFomatter : MessageFormattingStrategy {

    @PostConstruct
    fun setLogMessageFormat(): Unit {
        P6SpyOptions.getActiveInstance().logMessageFormat = this.javaClass.getName()
    };

    override fun formatMessage(connectionId: Int, now: String, elapsed: Long, category: String, prepared: String, sql: String, url: String): String {
        if (StringUtils.isEmpty(sql)) return StringUtils.EMPTY
        return String.format("[ConnectionId - %s | %s | %d ms | %s", connectionId, category, elapsed, formatSql(category, sql));
    }

    private fun formatSql(category: String, sql: String): String {

        if (Category.STATEMENT.name.equals(category)) {
            val trimmedSQL: String = sql.trim().lowercase(Locale.ROOT);
            return if (trimmedSQL.startsWith("create") || trimmedSQL.startsWith("alter") || trimmedSQL.startsWith("comment")) {
                FormatStyle.DDL.formatter.format(sql);
            } else {
                FormatStyle.BASIC.formatter.format(sql);
            }
        }
        return sql;
    }
}
